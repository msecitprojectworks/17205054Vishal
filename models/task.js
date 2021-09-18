var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var taskSchema = new mongoose.Schema({
    content : String
});

module.exports = mongoose.model('Task', taskSchema);