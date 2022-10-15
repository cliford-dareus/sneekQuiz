const express = require('express');
const router = express.Router();
const { createQuiz, getUserQuiz, getAllQuiz, getQuiz, deleteQuiz } = require('../controller/quizContoller');
const { authenticateUser } = require('../middleware/authentification');


router.route('/')
    .get(getQuiz);
router.route('/all')
    .get(getAllQuiz);
router.route('/addquiz')
    .post(authenticateUser, createQuiz);
router.route('/:id')
    .get(authenticateUser, getUserQuiz)
    .delete(authenticateUser, deleteQuiz);


module.exports = router;