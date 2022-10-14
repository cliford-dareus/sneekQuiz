const express = require('express');
const router = express.Router();
const { createQuiz, getUserQuiz, getAllQuiz, getQuiz } = require('../controller/quizContoller');
const { authenticateUser } = require('../middleware/authentification');


router.route('/').get(getQuiz);
router.route('/all').get(getAllQuiz);
router.route('/addquiz').post(authenticateUser, createQuiz);
router.route('/:id').get(authenticateUser, getUserQuiz);


module.exports = router;