import axios from 'axios';
import Button from '@mui/material/Button';
//import TableCell from '@mui/material/TableCell';
//import TableRow from '@mui/material/TableRow';
import React from 'react';
//import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jwt_decode from "jwt-decode";


const { useState } = require("react");

const Admin = () => {
  const t = localStorage.getItem('token');
  const decodedToken = jwt_decode(t);
  const id = decodedToken.id;
    const [requestedcourses, setRequestedCourses] = useState([]);
    const [reportedProblems, setreportedProblems] = useState([]);
   
    
    const viewRequestedCourses =  async () => {
        // await axios.get(`http://localhost:4000/viewcourses/${id}`).then(
          await axios.get(`http://localhost:4000/viewRequestedCourses/${id}`).then(
        (res) => { 
            const courses = res.data
           
            setRequestedCourses(courses)
            console.log(courses)
       
            
        }
         );
    }

    const sendMessage = () => {
        alert('Access Given successfully');
      }

  const  GiveAccess =  async () => {
       
        // await axios.get(`http://localhost:4000/viewcourses/${id}`).then(
          await axios.post(`http://localhost:4000/GiveAccess/${id}`).then(
        (res) => { 
           
            console.log(res.data)
            //console.log(res)
        //console.log(index)
            
        }
         );
    }


    const viewAllReportedProblems = async () => {
      await axios.get(`http://localhost:4000/viewAllReportedProblems`).then(
          (res) => { 
              const problems = res.data
              setreportedProblems(problems)
              console.log(problems)
          }
          );
  }

  const resolveProblem = async() =>{
      await axios.post(`http://localhost:4000/resolveProblem`).then(
          (res) =>{
              console.log(res.data)
          }
      )
  }
  const pendingProblem = async() =>{
      await axios.post(`http://localhost:4000/pendingProblem`).then(
          (res) =>{
              console.log(res.data)
          }
      )
  }



    const refreshPage = ()=>{
      window.location.reload();
   }

   const sendMessage1 = () => {
      alert('The problem has been resolved successfully');
    }

    const sendMessage2= () => {
      alert('The problem is pending');
    }


    const navigate = useNavigate();

    return(
        <div className="Admin">
                <h3>Admin</h3>
                <Row>
                  <Col>
                      <Button variant="contained"
                      onClick={viewRequestedCourses}
                      margin="normal"
                      padding="normal"
                      >View Access Courses Requests</Button>
                  </Col>
                  <Col>
                      <Button className='Report' variant="contained"
                      onClick={viewAllReportedProblems}
                      margin="normal"
                      padding="normal"
                      >view Reported Problems</Button>
                  </Col>
                  <Col>
                      <Button variant="contained" onClick={() => navigate('/SetPromotion')}>Set a promotion</Button>
                  </Col>
                </Row>
                <br></br>
                <br></br>
                
              <br></br>
              <br></br>

              {reportedProblems.map((problem,index4) => (

              <div key={index4}>
                <p><strong>Marked as: </strong>{problem.MarkedAs}</p>
                <p ><strong>TypeOfProblem: </strong>{problem.TypeOfProblem}</p>
                <p ><strong>Problem: </strong>{problem.Problem}</p>
                <p><strong>Status: </strong>{problem.Status}</p>
                <Button variant="contained" onClick={() =>{
                    resolveProblem();
                    sendMessage1();
                  }}>Resolve the problem</Button> 

              <br/>
              <br/>
             <Button variant="contained" onClick={() =>{
                pendingProblem();
                sendMessage2();
              }}>Pending</Button> 
             <hr/>





                </div> 
                ))}
              
             {requestedcourses.map((course, index) => (
                    
                      <div key={index}>
                            <ul type="disc">
                        <li style={{listStyleType:"none"}}> <strong>Request {index+1}: </strong>{course}</li>
                        <form>
                        <Button variant="contained" 
                onClick={()=>{GiveAccess(); sendMessage();}}
                margin="normal"
                padding="normal"
                >Give Access</Button>
                </form>
                    </ul>
    
    
                      </div> 
                    
               ))}
    
    
        </div>
        )
}

export default Admin;
