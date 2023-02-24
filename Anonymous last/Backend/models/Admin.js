const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AdminSchema =new Schema({
    Username: {
        type: String,
        required: false,
    },
    Password: {
        type: String,
        required: false,
    },
    Email: {
        type: String,
        required: false,
    },
    Phonenumber: {
        type: String,
        required: false,
    },
    CourseRequests:[{
        type:Object,
        required:false,
        }],
    ReportedProblems :  [{
        type : mongoose.Types.ObjectId , 
        ref:'ReportedProblems',
        required:true
    }]
    }, 
    { timestamps: true });

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;