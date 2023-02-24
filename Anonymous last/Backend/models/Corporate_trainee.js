const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CorporateTraineeSchema = new Schema({
    Username: {
        type: String,
        required: false,
    },
    Password: {
        type: String,
        required: false,
    },
    Age: {
        type: String,
        required: false,
    },
    Experience_years: {
        type: Number,
        required: false,
    },
    Phonenumber: {
        type: String,
        required: false,
    },
    Country: {
        type: String,
        required: false,
    },
    Id: {
        type: Number,
        required: false,
    },
    Email: {
        type: String,
        required: false,
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
    { timestamps: true });

const Corporate_trainee = mongoose.model('Corporate_trainee', CorporateTraineeSchema);
module.exports = Corporate_trainee;