const ReportedProblems = require("../models/ReportedProblems");
const CorporateTrainee = require("../models/Corporate_trainee");
const Admin = require("../models/Admin");
const mongoose = require('mongoose');


const createCorporateTrainee = async (req, res) =>{
    const {Username, Password} = req.body
    // add doc 
    try{
        const CT = await CorporateTrainee.create({Username, Password})
        res.status(200).json(CT)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//63a0abaae945feba2e582b16
 //await Admin.updateMany({}, { ReportedProblems : prob});
//await Admin.insertMany({ReportedProblems:prob} , {ordered:true});

const reportCTProblem = async(req,res) => {
    const id = req.params.id;
    const TypeOfProblem = req.body.TypeOfProblem
    const Problem = req.body.Problem
    try{
        const prob = await ReportedProblems.create({TypeOfProblem, Problem});
        console.log(prob);
        const CT = await CorporateTrainee.findById(id).populate('ReportedProblems');
        CT.ReportedProblems.push(prob);
        await CorporateTrainee.findByIdAndUpdate(id,{ReportedProblems : CT.ReportedProblems},{new:true}).populate('ReportedProblems'); 
        console.log(prob._id);
        console.log(CT);
        res.status(200).json({"ReportedProblems" : CT.ReportedProblems});
    }
    
    catch(error){
        res.status(400).json({error: error.message})
    }

   }

   const viewCTReportedProblems = async(req,res) => {
    const id = req.params.id;
    const data = await CorporateTrainee.findById(id).populate('ReportedProblems');
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

module.exports = {createCorporateTrainee ,reportCTProblem, viewCTReportedProblems}
