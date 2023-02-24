const ReportedProblems = require("../models/ReportedProblems");
const IndividualTrainee = require("../models/Individual_trainee");
const mongoose = require('mongoose');


const createIndividualTrainee = async (req, res) =>{
    const {Username, Password, Age , Experience_years,Phonenumber,Country, Faculty, Id, Email} = req.body
    // add doc 
    try{
        const IT = await IndividualTrainee.create({Username, Password, Age, Experience_years, Phonenumber, Country , Faculty, Id, Email})
        res.status(200).json(IT)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


const reportITProblem = async(req,res) => {
    const id = req.params.id;

    const TypeOfProblem = req.body.TypeOfProblem
    const Problem = req.body.Problem
   

    try{
        const prob = await ReportedProblems.create({TypeOfProblem, Problem});
        console.log(prob);
        const IT = await IndividualTrainee.findById(id).populate('ReportedProblems');
        IT.ReportedProblems.push(prob);
        await IndividualTrainee.findByIdAndUpdate(id,{ReportedProblems : IT.ReportedProblems},{new:true}).populate('ReportedProblems'); 
        console.log(prob._id);
        console.log(IT);
        res.status(200).json({"ReportedProblems" : IT.ReportedProblems});
    }
    
    catch(error){
        res.status(400).json({error: error.message})
    }

   }

   const viewITReportedProblems = async(req,res) => {
    const id = req.params.id;
    const data = await IndividualTrainee.findById(id).populate('ReportedProblems');
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

module.exports = {createIndividualTrainee ,reportITProblem, viewITReportedProblems}
