const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IndividualTraineeSchema = new Schema({
    Username: {
        type: String,
        required: false,
    },
    Password: {
        type: String,
        required: false
    },
    Wallet: {
        type: String,
        required: false
    },
    Age: {
        type: String,
        required: false
    },
    Experience_years: {
        type: Number,
        required: false
    },
    Phonenumber: {
        type: String,
        required: false
    },
    Country: {
        type: String,
        required: false
    },
    Faculty: {
        type: String,
        required: false,
    },
    Id: {
        type: Number,
        required: false
    },
    Email: {
        type: String,
        required: false
    },
    Course : [{
        type : mongoose.Types.ObjectId , 
        ref:'Courses',
        required:false
        
      }],
    Progress: [{
        type:String,
        required:false
    }],
    ReportedProblems :  [{
        type : mongoose.Types.ObjectId , 
        ref:'ReportedProblems',
        required:true
    }]
    }, 
    { timestamps: false });

const Individual_trainee = mongoose.model('Individual_trainee', IndividualTraineeSchema);
module.exports = Individual_trainee;