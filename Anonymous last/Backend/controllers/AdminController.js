const ReportedProblems = require("../models/ReportedProblems");
const Admin = require("../models/Admin");
const Course = require("../models/Courses");
const CorporateTrainee = require("../models/Corporate_trainee");
const mongoose = require('mongoose');

const createAdmin = async (req, res) =>{
    const {Username, Password} = req.body
    // add doc 
    try{
        const admin = await Admin.create({Username, Password})
        res.status(200).json(admin)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const viewAllReportedProblems = async (req, res) =>{
    await ReportedProblems.updateMany({"TypeOfProblem": "Other"}, { "Status": "unresolved", "MarkedAs":"unseen"});
    const rp= await ReportedProblems.find();
    await Admin.updateMany({}, {ReportedProblems: rp});
    res.status(200).json(rp);  
}


const getProblem = async (req, res) => {
    // const id = req.params.id;
    // const data = await ReportedProblems.findById(id);
    const data = await ReportedProblems.find();
    res.status(200).json(data);
    console.log(data);
}

const resolveProblemTechnical = async (req, res) =>{
    // const id = req.params.id;
    // const data = await ReportedProblems.findByIdAndUpdate(id, {Status: "Resolved"}, {new:true});
    // const  data = await ReportedProblems.findOneAndUpdate({'TypeOfProblem': { $regex: "Technical" }} ,{Status:"Resolved", MarkedAs:"Seen"})
    const data = await ReportedProblems.updateMany({ "TypeOfProblem": "Technical"}, { "Status": "Resolved", "MarkedAs":"Seen"})
    await ReportedProblems.updateMany({"TypeOfProblem": "Other"}, { "Status": "Resolved", "MarkedAs":"Seen"});
    res.status(200).json(data);
}

const pendingProblemTechnical = async (req, res) =>{
    const data = await ReportedProblems.updateMany({ "TypeOfProblem": "Financial"}, { "Status": "Pending", "MarkedAs":"Seen"});
    res.status(200).json(data);
}

const deleteProblems = async (req, res) =>{
    //const data = await ReportedProblems.deleteMany();
    const data = await Admin.updateMany({}, {ReportedProblems: null})
    res.status(200).json(data);
}

const setPromotion = async (req, res) =>{
    const price = req.query.Price;
    const discount = req.query.Discount;
    const promotion = price - (price*(discount/100));
    const data = await Course.updateMany({Price :price}, {Price: promotion})
    res.status(200).json(data);
}

const setSpecificPromotion = async (req, res) =>{
    const title = req.query.Title;
    const price = req.query.Price;
    const discount = req.query.Discount;
    const promotion = price - (price*(discount/100));
    const data = await Course.updateMany({Title :title}, {Price: promotion})
    res.status(200).json(data);
}

const viewAllCourses  = async (req, res) =>{
    const data = await Course.find();
    res.status(200).json(data);
    console.log(data);
    // Course.find({}, function(err, users) {
    //     var userMap = {};
    
    //     users.forEach(function(user) {
    //       userMap[user._id] = user;
    //     });
    
    //     res.send(userMap);
    // })
}


module.exports = {createAdmin, viewAllReportedProblems, getProblem, resolveProblemTechnical,pendingProblemTechnical, deleteProblems, 
    setPromotion, viewAllCourses, setSpecificPromotion};

