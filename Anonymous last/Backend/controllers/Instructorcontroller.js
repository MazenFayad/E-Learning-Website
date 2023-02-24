const Instructor = require("../models/Instructor");
const Course = require("../models/Courses");
const Admin = require("../models/Admin");
const Corporatetrainee = require("../models/Corporate_trainee");
const mongoose = require('mongoose');
const Individual_trainee = require("../models/Individual_trainee");
const ReportedProblems = require("../models/ReportedProblems");
// const Course = require("../models/Courses");
// const { application } = require("express");


//create
const createInstructor = async (req, res) =>{
    const {Username, Password, Country ,Email ,Phonenumber,Course,Ratings,Reviews} = req.body
    // add doc 
    try{
        const instructor = await Instructor.create({Username, Password, Country ,Email ,Phonenumber,Course})
        res.status(200).json(instructor)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


//get
const getInstructor = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such instructor'})
    }

    const instructor1 = await Instructor.findById(id)

    if(!instructor1){
        return res.status(404).json({error: 'No such instructor'})
    }

    res.status(200).json(instructor1)
}

const getInstructors = async(req, res) =>{
    const instructors = await Instructor.find({}).sort({createdAt: -1})

    res.status(200).json(instructors)
}

// const viewCourses = async(req,res) => {
//     /*
//     1- get the author id from the request query
//     2- find all the blogs that have the same author id
//     3- send the blogs as a response
//     */

//     const CourseId = req.query.CourseId;
//     instructorId = req.params.instructorId;
//     // check if userId is not empty
//     if(CourseId){
     
//     const result = await Instructor.find({Course:mongoose.Types.ObjectId(Instructor.CourseId)}).populate('Course');
      
//     // for (let index = 0; index < result.length; index++) {
//     //     const element = result[index];
//     //     // res.status(200).json(element.Course.Title)
//     //     // console.log(result);
//     // }
//     res.status(200).json(result)
      
//     }else{
//         res.status(400).json({error:"courseId is required"})
//     }
// }

// const viewCourses = async(req,res) => {
//     const id = req.params.id;
//      const data =await Instructor.findById(id).populate('Course');
//     //  res.status(200).json(data.Course.length);
        
//         for (let index = 0; index < data.Course.length; index++) {
//             //   element = data.Course[index].Title;
//             // console.log(data.Course[index].Title);
           
//           res.status(200).json((data.Course[index].Title));
          
//             // const element = Course[index];
//             //  element = data.Course[index].Title;
          
//             //  res.status(200).json(element);
              
//             // res.status(200).json(data.Course[0].Title);
//         }
       
        
    
//         // res.status(200).json(element.Course.Title)
//         // console.log(result);
       
//     // res.status(200).json(data.Course[0].Title);
//     // res.status(200).json(data.Course[1].Title);
   
//     // console.log(data.Course);
// }
const viewCourses = async(req,res) => {
    const id = req.params.id;
    const data = await Instructor.findById(id).populate('Course');
    const Title = []
   if(data){
     for (let index = 0; index <data.Course.length; index++){
        Title.push(data.Course[index].Title);
        console.log(data.Course[index].Title);
        // return res.status(200).json((data.Course[index].Title));
       }  
       res.status(200).json({"Courses": Title});
      
   }
   else {
    
    res.status(400).json({error:"no such instructor"});
   }


   

    
}



// const filterbyMajor= async(req,res) => {
   
//     const Major = req.query.Major;
//     const id = req.params.id;
//     const data = await Instructor.findById(id).populate('Course');
//     // const userId = req.params.userId;
//     // check if userId is not empty
//      index1 = 0;
//     for (let index = 0 ; index <data.Course.length; index++){
//         console.log(data.Course[index].Major === Major)
//         if(data.Course[index].Major === Major){
//             index1 = index;
//             break;
//            }

//     }
//     res.status(200).json(data.Course[index1])
    
// }
const filterbySubject= async(req,res) => {

    const Major = req.query.Major;
    const id = req.params.id;
    const data = await Instructor.findById(id).populate('Course');
    const courses = [];
    // const userId = req.params.userId;
    // check if userId is not empty
    if(data){
    for (let index = 0 ; index <data.Course.length; index++){
        console.log(data.Course[index].Major === Major)
        if(data.Course[index].Major === Major){
            courses.push(data.Course[index])
           }

    }
    res.status(200).json(courses)
    }
    else{
        res.status(400).json({error:"no such instructor"})
    }
    
    // if(Major){
    //  res.status(200).json(data.Course)
    // }
    // else{
    //     res.status(400).json({error:"userId is required"})
    // }
}

const filterbyPrice= async(req,res) => {

    const Price = req.query.Price;
    const id = req.params.id;
    const data = await Instructor.findById(id).populate('Course');
    const courses = [];
    // const userId = req.params.userId;
    // check if userId is not empty
    if(data){
    for (let index = 0 ; index <data.Course.length; index++){
        console.log(data.Course[index].Price == Price)
        if(data.Course[index].Price == Price){
            courses.push(data.Course[index])
           }

    }

    res.status(200).json(courses)
}
else{
    res.status(400).json({error:"no such instructor"})
}
    // if(Major){
    //  res.status(200).json(data.Course)
    // }
    // else{
    //     res.status(400).json({error:"userId is required"})
    // }
}
    
// const SearchforCourse= async(req,res) => {

//     const Title = req.query.Title;
//     const Major = req.query.Major;
//     const Name = req.query.Name;
//     const id = req.params.id;
//     // const id1 = req.query.id1;
//     const data = await Instructor.findById(id).populate('Course');
//     const data1 = await Instructor.findOne({Username :Name}).populate('Course');
//     const courses = [];
//     // const userId = req.params.userId;
//     // check if userId is not empty
//     for (let index = 0 ; index <data.Course.length; index++){
//         // console.log(data.Course[index].Title === Title)
//         if(data.Course[index].Title === Title){
            
//             console.log(data.Course[index].Title === Title)
//             // console.log(data1.Username )
//             courses.push(data.Course[index])
//            }
//            if(data.Course[index].Major === Major){
//             console.log(data1.Username )
//             // console.log(data.Course[index].Major === Major)
//             courses.push(data.Course[index])
//            }
//         //    console.log(data1.Username )

//            if(data1.Username === Name){
//             // console.log(data.Course[index].Username === Name)
//             console.log(data1.Username )
//             courses.push(data1.Course[index])
//            }

//     }
//     res.status(200).json(courses)
    
// }

const createCourse1 = async (req, res) =>{
    const {Title, Discount, Rating,Hours,Price,Subtitle,ShortSummary,Major} = req.body
    // add doc 
    try{
        const course = await Course.create({Title, Discount, Rating,Hours,Price,Subtitle,ShortSummary,Major})
        res.status(200).json(course)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const createCourse = async (req, res) =>{

    const id = req.params.id;

   
    const Title= req.query.Title
    const Discount = req.query.Discount
    const Rating = req.query.Rating
    const Hours = req.query.Hours
    const Price = req.query.Price
    const Subtitles = req.query.Subtitles;
    const ShortSummary = req.query.ShortSummary
    const Major = req.query.Major
    const Reviews = req.query.Reviews
    const link =req.query.URL
    // add doc 
    try{
       
        const course = await Course.create({ Hours,Title, Major,Discount, Subtitles,Price,link,ShortSummary})
        // inst.Course.push(course)
        const inst1 = await Instructor.findById(id).populate('Course');
        inst1.Course.push(course)
        const inst = await Instructor.findByIdAndUpdate(id,{Course : inst1.Course},{new:true}).populate('Course'); 
        // inst1.Course.pop(course)
        // inst.Course.push(course)
        console.log(course._id);
        // console.log(inst.Course[0])
        console.log(inst1);
        // res.status(200).json({"Course": inst.Course[2].Title});
        // res.status(200).json("course is successfully added");
        res.status(200).json({"Course" : inst1.Course});
        
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


const SearchforCoursebyName= async(req,res) => {

    // const Title = req.query.Title;
    // const Major = req.query.Major;
    const Name = req.query.Name;
    const id = req.params.id;
    // const id1 = req.query.id1;
    const data = await Instructor.findById(id).populate('Course');
    const data1 = await Instructor.findOne({Username :Name}).populate('Course');
    const courses = [];
    // const userId = req.params.userId;
    // check if userId is not empty
    for (let index = 0 ; index < data1.Course.length; index++){
        // console.log(data.Course[index].Title === Title)
        // if(data.Course[index].Title === Title){

        //     // console.log(data.Course[index].Title === Title)
        //     courses.push(data.Course[index])
        //    }
        //    if(data.Course[index].Major === Major){
        //     // console.log(data.Course[index].Major === Major)
        //     courses.push(data.Course[index])
        //    }
        //    console.log(data1.Username)
      if (data){
           if(data1.Username === Name){

                courses.push(data1.Course[index])

            // console.log(data.Course[index].Username === Name)
            // courses.push(data1.Course[index])

           }
        }

    }
    res.status(200).json(courses)
    // if(Major){
    //  res.status(200).json(data.Course)
    // }
    // else{
    //     res.status(400).json({error:"userId is required"})
    // }
}

const SearchforCoursebySubjectandTitle= async(req,res) => {

    const Title = req.query.Title;
    const Major = req.query.Major;
    // const Name = req.query.Name;
    const id = req.params.id;
    // const id1 = req.query.id1;
    const data = await Instructor.findById(id).populate('Course');
    // const data1 = await Instructor.findOne({Username :Name}).populate('Course');
    const courses = [];
    // const userId = req.params.userId;
    // check if userId is not empty
    if(data){
    for (let index = 0 ; index < data.Course.length; index++){
        // console.log(data.Course[index].Title === Title)
        if(data.Course[index].Title === Title){

            // console.log(data.Course[index].Title === Title)
            courses.push(data.Course[index])
           }
           if(data.Course[index].Major === Major){
            // console.log(data.Course[index].Major === Major)
            courses.push(data.Course[index])
           }
        //    console.log(data1.Username)

        //    if(data1.Username === Name){

        //         courses.push(data1.Course[index])

        //     // console.log(data.Course[index].Username === Name)
        //     // courses.push(data1.Course[index])

        //    }

    }
}
    res.status(200).json(courses)
    // if(Major){
    //  res.status(200).json(data.Course)
    // }
    // else{
    //     res.status(400).json({error:"userId is required"})
    // }
}


const Instructors = async(req,res) => {
    // const { id } = req.params

    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({error: 'No such instructor'})
    // }

    // const instructor1 = await Instructor.findById(id)

    // if(!instructor1){
    //     return res.status(404).json({error: 'No such instructor'})
    // }

    

    res.sendFile('Instructor.html' , {root:'./Views'})

}

const viewRatings = async(req,res) => {
    const id = req.params.id;
    const data = await Instructor.findById(id).populate('Course');
    const ratings = []
   if(data){
     for (let index = 0; index <data.Course.length; index++){
        ratings.push(data.Course[index].Rating);
        console.log(data.Course[index].Rating);
        // return res.status(200).json((data.Course[index].Title));
       }
       res.status(200).json({"Courses": ratings});

   }
   else {

    res.status(400).json({error:"no such instructor"});
   }
}

const viewReviews = async(req,res) => {
    const id = req.params.id;
    const data = await Instructor.findById(id).populate('Course');
    const reviews = []
   if(data){
     for (let index = 0; index <data.Course.length; index++){
        reviews.push(data.Course[index].Reviews);
        console.log(data.Course[index].Reviews);
        // return res.status(200).json((data.Course[index].Title));
       }
       res.status(200).json({"Courses": reviews});

   }
   else {

    res.status(400).json({error:"no such instructor"});
   }
}


const editEmail = async(req, res) => {


    const id = req.params.id;
    const Email = req.query.Email;
    if(id){
        const email = await Instructor.findByIdAndUpdate(id, {Email}, {new:true})
        res.status(200).json(email)
    }
    else{
        res.status(400).json({error:"Id is wrong"})
    }

}

const editBiography = async(req, res) => {


    const id = req.params.id;
    const Biography = req.query.Biography;
    if(id){
        const biography = await Instructor.findByIdAndUpdate(id, {Biography}, {new:true})
        res.status(200).json(biography)
    }
    else{
        res.status(400).json({error:"Id is wrong"})
    }

} 


const editDiscount = async(req, res) => {


    const id = req.params.id;
    const Discount = req.query.Discount;
    const data = await Instructor.findById(id).populate('Course');
     i =0;
    if(data){
        for (let index = 0 ; index <data.Course.length; index++){
            i++;
            // console.log(data.Course[i-1].Major)
        }
        
        const lastid =   data.Course[i-1]._id;
        
        const discount = await Course.findByIdAndUpdate(lastid, {Discount}, {new:true})
        res.status(200).json(discount)

    }
    
     else{
        res.status(400).json({error:"Id is wrong"})
     }

    
    

} 


const getSubtitle = async(req, res) => {


    const id = req.params.id;
    const data1 = await Instructor.findById(id).populate('Course');
     i =0;
    if(data1){
        for (let index = 0 ; index <data1.Course.length; index++){
            i++;
            // console.log(data.Course[i-1].Major)
        }
        
        const lastid =   data1.Course[i-1]._id;
        
        const tmam = await Course.findById(lastid)
        res.status(200).json(tmam.Subtitles)

    }
    
     else{
        res.status(400).json({error:"Id is wrong"})
     }

    
    

} 

const AddURL = async(req, res) => {


    const id = req.params.id;
    const URL = req.query.URL;
    const data = await Instructor.findById(id).populate('Course');
     i =0;
    if(data){
        for (let index = 0 ; index <data.Course.length; index++){
            i++;
            // console.log(data.Course[i-1].Major)
        }
        const lastid =   data.Course[i-1]._id;

        const link = await Course.findByIdAndUpdate(lastid, {URL}, {new:true})
        res.status(200).json(link)


    }

     else{
        res.status(400).json({error:"Id is wrong"})
     }
}

const viewMyRatings = async(req,res) => {
    const id = req.params.id;
    const data = await Instructor.findById(id);
    const ratings = [];
    if(data){
        for (let index = 0; index <data.Ratings.length; index++){
           ratings.push(data.Ratings[index]);
           console.log(data.Ratings[index]);
          }
          res.status(200).json({"Rating":ratings});

      }
      else {

       res.status(400).json({error:"no such instructor"});
      }
   }

   const viewMyReviews = async(req,res) => {
    const id = req.params.id;
    const data = await Instructor.findById(id);
    const reviews = [];
    if(data){
        for (let index = 0; index <data.Reviews.length; index++){
           reviews.push(data.Reviews[index]);
           console.log(data.Reviews[index]);
          }
          res.status(200).json({"Reviews":reviews});

      }
      else {

       res.status(400).json({error:"no such instructor"});
      }
   }

   const viewMySalary = async(req,res) => {
    const id = req.params.id;
    const data = await Instructor.findById(id);
    
    if(data){
          
          res.status(200).json({"NetProfit":data.NetProfit});

      }
      else {
       res.status(400).json({error:"no such Salary"});
      }
   }

const RequestAccess = async(req, res) => {

 const id2="635980b81a1fb983c7546a18"
    const id = req.params.id;
    const id1 = req.params.id1;
    const data = await Corporatetrainee.findById(id);
    const data2 = data.Username
    const data1 = await Admin.findById(id2);
    const courses = await Course.findById(id1);
    const data3 = courses.Title
    
    if(id){
        // for (let index = 0 ; index <2; index++){
        //     console.log("hwbdhw");
           

           
        //     // console.log(data.Course[i-1].Major)
        // }
        
        const lastid =   data1.CourseRequests;
        console.log(lastid)
        const array= lastid;
        array.push(data2 + " " + "has requested access to " + data3 +" " + "Course");
        console.log(array)
        const access = await Admin.updateMany({lastid},{$set:{CourseRequests:array}}, {new:true})
      // console.log(data2)
       //console.log(data3)
       console.log(access)
       // console.log(lastid)
        res.status(200).json(access)

    }

     else{
        res.status(400).json({error:"Id is wrong"})
     }
}

const viewRequestedCourses = async(req,res) => {
    const id = req.params.id;
    const data = await Admin.findById(id);
    const Courses = []
   if(data){
     for (let index = 0; index <data.CourseRequests.length; index++){
        Courses.push(data.CourseRequests[index]);
        console.log(data.CourseRequests[index]);
        // return res.status(200).json((data.Course[index].Title));
       }  
       res.status(200).json(Courses);
      
   }
   else {
    
    res.status(400).json({error:"no such Courses"});
   }


   

    
}

const GiveAccess = async(req,res,index)  => { 


//let element = document.getElementById(index)
    
       const id = req.params.id;
       const data = await Admin.findById(id);
     
       
       if(id){
       
            
            const lastid =   data.CourseRequests;
           console.log(lastid)
           const array= lastid;
           array.splice(index,1)
           console.log(array)

           
            // console.log(data.Course[i-1].Major)
        
           
          
           const access = await Admin.updateMany({lastid},{$set:{CourseRequests:array}}, {new:true})
       
          console.log(access)
        
           res.status(200).json(access)

    
       }
   
        else{
           res.status(400).json({error:"Id is wrong"})
        }
   }

   
   const GetCorporateProgress = async(req,res) => {
    const id = req.params.id;
    const data = await Corporatetrainee.findById(id);
    const Title = []
   if(data){
     for (let index = 0; index <data.Progress.length; index++){
        Title.push(data.Progress[index]);
        console.log(data.Progress[index]);
        // return res.status(200).json((data.Course[index].Title));
       }  
       res.status(200).json(Title);
      
   }
   else {
    
    res.status(400).json({error:"no such instructor"});
   }


   

    
}
    
const GetIndividualProgress = async(req,res) => {
    const id = req.params.id;
    const data = await Individual_trainee.findById(id);
    const Title = []
   if(data){
     for (let index = 0; index <data.Progress.length; index++){
        Title.push(data.Progress[index]);
        console.log(data.Progress[index]);
        // return res.status(200).json((data.Course[index].Title));
       }  
       res.status(200).json(Title);
      
   }
   else {
    
    res.status(400).json({error:"no such instructor"});
   }


   

    
}

// const UpdatedCorporateProgress = async(req,res) => {
//     const id = req.params.id;
//     const data = await Corporatetrainee.findById(id);
    
//    if(data){
//     //  for (let index = 0; index <data.Progress.length; index++){
//     //     Title.push(data.Progress[index]);
//     //     console.log(data.Progress[index]);
//     //     // return res.status(200).json((data.Course[index].Title));
//     //    }  
//     //    res.status(200).json(Title);
//      const Lastid =data.Progress
//     const access = await Corporatetrainee.findOneAndUpdate({Lastid},{$inc:{Progress:5}}, {new:true})
//     res.status(200).json(access)
//    }
//    else {
    
//     res.status(400).json({error:"no such instructor"});
//    }


   

    
// }



const reportAProblem = async(req,res) => {
    const id = req.params.id;

    const TypeOfProblem = req.body.TypeOfProblem
    const Problem = req.body.Problem


    try{
        const prob = await ReportedProblems.create({TypeOfProblem, Problem});
        console.log(prob);
        const inst1 = await Instructor.findById(id).populate('ReportedProblems');
        inst1.ReportedProblems.push(prob);
        await Instructor.findByIdAndUpdate(id,{ReportedProblems : inst1.ReportedProblems},{new:true}).populate('ReportedProblems'); 
        console.log(prob._id);
        console.log(inst1);
        res.status(200).json({"ReportedProblems" : inst1.ReportedProblems});
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

   }

const viewReportedProblems = async(req,res) => {
    const id = req.params.id;
    const data = await Instructor.findById(id).populate('ReportedProblems');
    const reportedProblems = []
   if(data){
     for (let index = 0; index <data.ReportedProblems.length; index++){
        reportedProblems.push(data.ReportedProblems[index]);
        console.log(data.ReportedProblems[index]);
       }
       res.status(200).json({"ReportedProblems": reportedProblems});

   }
   else {

    res.status(400).json({error:"no such instructor"});
   }
}
//bonus
const viewTotalEnrolled = async(req,res) => {
    const id = req.params.id;
    const data = await Instructor.findById(id);
    
    if(data){
          
          res.status(200).json({"TotalEnrolled":data.TotalEnrolled});

      }
      else {
       res.status(400).json({error:"no such value"});
      }
   }

   const editReview = async(req, res) => {


    const id = req.params.id;
    const Review = req.query.Reviews;
    const data = await Instructor.findById(id);
     i =0;
    if(data){
       
        
      last = data.Reviews
      const array = last
     array[0]=Review
     
        
        const review = await Instructor.findByIdAndUpdate(id,{$set:{Reviews:array}}, {new:true})
        res.status(200).json(review)

    }
    
     else{
        res.status(400).json({error:"Id is wrong"})
     }

    
    

} 

module.exports = {createInstructor, getInstructor, getInstructors,viewCourses, filterbySubject,filterbyPrice 
    ,createCourse1, SearchforCoursebyName,SearchforCoursebySubjectandTitle,Instructors,createCourse,editBiography
    ,editEmail,viewRatings,viewReviews,editDiscount,getSubtitle,AddURL,viewMyRatings,viewMyReviews,viewMySalary
    ,RequestAccess,viewRequestedCourses,GiveAccess,GetCorporateProgress,GetIndividualProgress,reportAProblem
    ,viewReportedProblems,viewTotalEnrolled,editReview}