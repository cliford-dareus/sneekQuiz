const createTokenUser = (user) => {
  return { name: user.name, userId: user._id, quiz_solved: user.quiz_solved };
};

module.exports = createTokenUser;