// userModel.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var member = new Schema({
    username: String,
    password: String,
    email: String,
    regip: String,
    logip: String,
    status: {type: Number, default: 0}
    createTime: {type: Number, default: Date.now()}
    loginTime: {type:Number, default: Date.now()}
}, { collection: 'member'});

module.exports = mongoose.model('member', member);
