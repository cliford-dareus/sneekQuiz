const { StatusCodes } = require('http-status-codes');
const CustomError = require('../error');
const Quiz = require('../models/quiz');

const createQuiz = async (req, res) => {
    req.body.user = req.user.userId;
    const quiz = await Quiz.create( req.body );
    res.status(StatusCodes.CREATED).json({ quiz });
};

const getAllQuiz = async ( req, res) => {
    const quiz = await Quiz.find({});
    res.status(StatusCodes.OK).json({ quiz });
};

const getQuiz = async (req, res) => {
    const { title, category } = req.query;

    let newObject = {};

    if(title){
        newObject.title = { $regex: title , $options: 'i'};
    };

    if(category){
        newObject.category = { $regex: category, $options: 'i'};
    };

    const quiz = await Quiz.find(newObject);
    res.status(StatusCodes.OK).json({ quiz });
};

const getUserQuiz = async ( req, res ) => {
    const { id } = req.params;

    const quiz = await Quiz.find({ user: id});
    res.status(StatusCodes.OK).json({ quiz })
};

const updateQuiz = async (req, res) => {
    const { id } = req.params;
    const { title, category, quizzes } = req.body;
    const { completedQuiz } = req.query;

    let quiz;

    if(completedQuiz){
        quiz = await Quiz.findOneAndUpdate({ _id: id}, {$inc : {'number_solved' : 1}}).exec();
    };

    res.status(StatusCodes.OK).json({ quiz })
};

const deleteQuiz = async ( req, res ) => {
    const { id } = req.params;
    console.log(`id is ${id}`)
    const quiz = await Quiz.findOneAndDelete({ _id: id});
    res.status(StatusCodes.OK).json({ quiz });
}

module.exports = {
    createQuiz,
    getUserQuiz,
    updateQuiz,
    getAllQuiz,
    getQuiz,
    deleteQuiz
};