// postModel.js
var mongoose  = require('mongoose');
var userModel = require('./userModel');
var Schema    = mongoose.Schema;

var post = new Schema({
    title: String,
    content: String,
    pic: String,
    ip: String,
    tags: [],
    status: {type: Number, default: 0},
    createTime: {type: Number, default: Date.now()},
    updatetime: {type: Number, default: Date.now()},
    email: String,
    author: {type: Schema.Types.ObjectId, ref: 'user' },
    view: {type:Number, default:0},
    meta: {
        votes: {type: Number, default: 0},
        favs: {type: Number, default: 0},
    }
}, { collection: 'post' });


post.path('title').validate(function (v) {
  return v.length > 50;
});

module.exports = mongoose.model('post', post);