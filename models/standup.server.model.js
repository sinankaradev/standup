var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
    memberName:String,
    project:String,
    workYesterday:String,
    workToday:String,
    impedment:String,
    createdOn:{type:Date, default:Date.now}
});

// export model
module.exports = mongoose.model('Standup', standupSchema);