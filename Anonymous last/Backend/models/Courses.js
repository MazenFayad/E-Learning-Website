const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema =new Schema({
    Hours: {
        type: Number,
        required: true,
    },
    Rating: {
        type: Number,
        required: false
    },
    Title: {
        type: String,
        required: true,
    },
    Major: {
        type: String,
        required: true,
    },
    Discount: {
        type: String,
        required: true
    },
    PreviewLink: {
        type: String,
        required: false
    },
    outline: {
        type: String,
        required: false
    },
    //new aded
    Subtitle: [
        {
          name: String,
          Hour: String
        }
      ],
      Subtitles: [
        {
          type: String,
          required: false
        }
      ],  
    excercises: {
        type: String,
        required: false
    },
    Price: {
        type: Number,
        required: true
    },
    Instructor_id: [{
        type : mongoose.Types.ObjectId , 
        ref:'Instructor',
        required: false
    }],
    Reviews:{
        type:String,
        required: false
    },
    URL:
    {
        type: String,
        required: false
    },
    ShortSummary: {
        type:String,
        required: true
      }, 
    }, 
    { timestamps: false, toJSON: { virtuals: true },toObject: { virtuals: true }});

const Course = mongoose.model('Courses', CourseSchema);
module.exports = Course;