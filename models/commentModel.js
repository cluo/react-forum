// commentModel.js
var mongoose  = require('mongoose');
var userModel = require('./userModel');
var Schema    = mongoose.Schema;

var comment  = new Schema({
    aid: Schema.Types.ObjectId
    mod: String,
    name: String,
    email: String,
    comment: String,
    author: { type: Schema.Types.ObjectId, ref: 'user' }
    date: {type:Number, default: Date.now()}
},{ collection: 'comment'});

module.exports = mongoose.model('comment', comment);