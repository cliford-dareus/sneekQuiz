const mongoose = require('mongoose');

const connecDB = (uri) => {
    mongoose.connect(uri);
};

module.exports = connecDB;