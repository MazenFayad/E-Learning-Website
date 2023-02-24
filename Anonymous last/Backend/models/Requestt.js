const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RequestSchema =new Schema({
    refund: 
      [ [{
        type : mongoose.Types.ObjectId , 
        ref:'Individual_trainee',
        required: true
    },{
        type : mongoose.Types.ObjectId , 
        ref:'Courses',
        required: true
    }]]
    
    }, 
    { timestamps: false });

const Requestt = mongoose.model('Requestt', RequestSchema);
module.exports = Requestt;