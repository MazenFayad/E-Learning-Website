const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InstructorSchema =new Schema({
    Username: {
        type: String,
        required: false,
    },
    Password: {
        type: String,
        required: false
    },
    Department: {
        type: String,
        required: false,
    },
    Phonenumber: {
        type: String,
        required: false,
    },
    Salary: {
        type: String,
        required: false,
    },
    Id: {
        type: Number,
        required: false,
    },
    Experience_years: {
        type: Number,
        required: false,
    },
    Country: {
        type: String,
        required: false,
    },
    Rating: {
        type: Number,
        required: false
    },
    Ratings: [{
        type: Number,
        required: false
    }],
    Email: {
        type: String,
        required: false,
    },
    Biography:{
        type: String,
        required: false,
    },
    Reviews: [{
        type: String,
        required: false
    }],
    Course : [{
        type : mongoose.Types.ObjectId , 
        ref:'Courses',
        required:false
        
      }],
      NetProfit : [{
        type :String, 
        required:false

      }],
    ReportedProblems :  [{
        type : mongoose.Types.ObjectId , 
        ref:'ReportedProblems',
        required:true
    }],
    TotalEnrolled :  [{
        type : String , 
        required:false
    }]
    }, 
    
    { timestamps: true, toJSON: { virtuals: true },toObject: { virtuals: true } });

const Instructor = mongoose.model('Instructor', InstructorSchema);
module.exports = Instructor;