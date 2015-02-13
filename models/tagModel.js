// tagModels.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tag = new Schema({
    name: String,
    key: String,
    createtime:{type:Number, default:Date.now()}
}, { collection: 'tag'});

module.exports = mongoose.model('tag', tag);