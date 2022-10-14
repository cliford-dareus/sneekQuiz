const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    name: {
      type: 'String',
      required: [true, 'Please provide name'],
      trim: true,
      minlength: 4,
      maxlength: 40
    },
    email:  {
      type: 'String',
      required: [true, 'Please provide email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide valid email',
      },
    },
    password: {
      type: 'String',
      required: [true, 'Please provide Password'],
      minlength: 6
    },
    ocupation: 'String',
    isVerified: { type: 'Boolean', default: false },
    verificationToken: "String",
    verified: {type: 'Date'},
    passwordToken: 'String' ,
    passwordTokenExpirationDate: "Date" 
});

UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths());
  // console.log(this.isModified('name'));
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model('User', UserSchema);