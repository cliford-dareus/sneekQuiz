const { createJWT, isTokenValid, attachCookiesToResponse } = require('./jwt');
const createTokenUser = require('./createTokenUser');
const chechPermissions = require('./checkPermission');
const sendVerificationEmail = require('./sendVerifycationEmail');
const sendResetPasswordEmail = require('./sendResetPasswordEmail');
const createHash = require('./createHash');

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
  createTokenUser,
  chechPermissions,
  sendVerificationEmail,
  sendResetPasswordEmail,
  createHash,
};