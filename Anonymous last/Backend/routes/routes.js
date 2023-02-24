const express = require('express')
// const createCourse= require('../controllers/Coursecontroller')
const {createInstructor ,getInstructor,getInstructors, viewCourses, filterbySubject,filterbyPrice
    ,SearchforCoursebyName,SearchforCoursebySubjectandTitle,createCourse1,Instructors,createCourse,editBiography
    ,editEmail,viewRatings,viewReviews, editDiscount,getSubtitle,AddURL,viewMyRatings,viewMyReviews,viewMySalary
    ,RequestAccess,viewRequestedCourses,GiveAccess
    ,GetCorporateProgress,GetIndividualProgress,reportAProblem,viewReportedProblems
    ,viewTotalEnrolled,editReview}= require('../controllers/Instructorcontroller')
    const{createIndividualTrainee, reportITProblem, viewITReportedProblems} = require('../controllers/IndividualTraineeController')
const{createCorporateTrainee, reportCTProblem, viewCTReportedProblems} = require('../controllers/CorporateTraineeController')
const { createAdmin, viewAllReportedProblems, getProblem, resolveProblemTechnical,pendingProblemTechnical, deleteProblems, setPromotion, viewAllCourses, setSpecificPromotion} = require('../controllers/AdminController')
const router = express.Router()
// var request = require("request");

//Get all workouts
// router.patch('/createcourse/:id', createCourse)

// router.patch('/createcourse/:id',createCourse)
    


// const wrap=function(request_body, application_id, call_back) {
//     var options = {
//         method: 'PATCH',
//         url: 'http://localhost:8000/Instructorshtml/'+ application_id,
//         body: request_body,
//         json: true
//     };
    
//     request(options, function (error, response, body) {
//         if (error) throw new Error(error);

//         return call_back(body);
//     });
// };
router.post('/createcourse/:id', createCourse)
router.post('/createcourse1', createCourse1)
router.post('/instructor', createInstructor)
router.get('/getinstructor/:id', getInstructor)
router.get('/getinstructors', getInstructors)
router.get('/viewcourses/:id', viewCourses)
router.get('/filtercourse/:id', filterbySubject)
router.get('/filtercoursebyprice/:id', filterbyPrice)
router.get('/searchcourseName/:id', SearchforCoursebyName)
router.get('/searchcourseSubjectandTitle/:id', SearchforCoursebySubjectandTitle)
// router.get('/filter', filter)
//Get a single workout
router.get('/viewRatings/:id', viewRatings)
router.get('/viewReviews/:id', viewReviews)
router.post("/editEmail/:id", editEmail);
router.post("/editBiography/:id", editBiography);
router.post("/editDiscount/:id", editDiscount);
router.post("/addurl/:id", AddURL);
router.get('/getSubtitle/:id', getSubtitle)

router.get('/viewMyRatings/:id', viewMyRatings)
router.get('/viewMyReviews/:id', viewMyReviews)
router.get('/viewMySalary/:id', viewMySalary)
router.post("/Requestaccess/:id/:id1", RequestAccess);
router.get('/viewRequestedCourses/:id', viewRequestedCourses)
router.post("/GiveAccess/:id", GiveAccess);
router.get('/GetCorporateProgress/:id', GetCorporateProgress)
router.get('/GetIndividualProgress/:id', GetIndividualProgress)
//bonus
router.get('/viewTotalEnrolled/:id', viewTotalEnrolled)
router.post('/editReview/:id', editReview)
//****** */
//router.post('/UpdateCorporateProgress/:id', UpdatedCorporateProgress)
router.get('/Instructorshtml', Instructors)

//mazen alaa 
router.post('/reportAProblem/:id', reportAProblem);
router.get('/viewReportedProblems/:id', viewReportedProblems);

//2) IndividualTrainee problems
router.post('/individualTrainee', createIndividualTrainee)
router.post('/reportITProblem/:id', reportITProblem);
router.get('/viewITReportedProblems/:id', viewITReportedProblems);

//3) CorporateTrainee problems

router.post('/corporateTrainee', createCorporateTrainee)
router.post('/reportCTProblem/:id', reportCTProblem);
router.get('/viewCTReportedProblems/:id', viewCTReportedProblems);

//4) Admin
router.post('/admin', createAdmin);
router.get('/viewAllReportedProblems', viewAllReportedProblems);
router.get('/getProblem', getProblem);
router.post('/resolveProblem', resolveProblemTechnical)
router.post('/pendingProblem',pendingProblemTechnical)
router.post('/deleteProblems', deleteProblems)
router.post('/setPromotion', setPromotion)
router.post('/setSpecificPromotion', setSpecificPromotion)
router.get('/viewAllCourses', viewAllCourses)

module.exports = router
