const express = require('express');
const router = express.Router();
const { createQuiz, getUserQuiz, getAllQuiz, getQuiz, deleteQuiz, updateQuiz } = require('../controller/quizContoller');
const { authenticateUser } = require('../middleware/authentification');


router.route('/')
    .get(getQuiz);
router.route('/all')
    .get(getAllQuiz);
router.route('/addquiz')
    .post(authenticateUser, createQuiz);
router.route('/:id')
    .get(authenticateUser, getUserQuiz)
    .delete(authenticateUser, deleteQuiz)
    .patch(authenticateUser, updateQuiz);


module.exports = router;