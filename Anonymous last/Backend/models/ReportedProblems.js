const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProblemSchema =new Schema({
    MarkedAs:{
        type: String,
        default : "unseen",
        required: false
    },
    TypeOfProblem: {
        type: String,
        required: true
    },
    Problem: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        default : "unresolved", 
        required: true
    }

},
{ timestamps: false})

const ReportedProblems = mongoose.model('ReportedProblems', ProblemSchema);
module.exports = ReportedProblems;