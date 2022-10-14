const mongoose = require('mongoose');



const QuizSchema = new mongoose.Schema({
    title: {
        type: 'String',
        required: [true, ''],
        trim: true,
        maxlength: [100, 'Name can not be more than 100 characters']
    },
    category: {
        type: 'String',
        required: [true, 'Must provide a least one category'],
    },
    quizzes: {
        type: []
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    number_visited: {
        type: 'Number',
        default: 0
    },
    number_solved: {
        type: 'Number',
        default: 0
    },
    featured: {
        type: 'Boolean',
        default: false
    },
    Privated: {
        type: 'Boolean',
        default: false
    }
},
{ timestamps: true}
);

module.exports = mongoose.model('Quiz', QuizSchema);