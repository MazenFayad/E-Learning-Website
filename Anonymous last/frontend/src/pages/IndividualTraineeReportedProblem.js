import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import jwt_decode from "jwt-decode";
const { useState } = require("react");

const IndividualTraineeReportedProblem= () => {
  const t = localStorage.getItem('token');
  const decodedToken = jwt_decode(t);
  const id = decodedToken.id;
    const [TypeOfProblem, setTypeOfProblem] = useState([]);
    const [Problem, setProblem] = useState([]);

     //viewReportedProblems
     const [Problems, setProblems] = useState([]);

     

     const reportITProblem = async() =>{
        const body = {TypeOfProblem, Problem};
        await axios.post(`http://localhost:4000/reportITProblem/${id}`, body)
        .then(
         (res) => { 
          console.log(res.data)
        }
        );
    }

    const viewITReportedProblems =  async () => {
        await axios.get(`http://localhost:4000/viewITReportedProblems/${id}`).then(
      (res) => { 
          const problems = res.data.ReportedProblems
          setProblems(problems)
          console.log(problems)
     
          
      }
       );
  }

  const sendMessage = () => {
    alert('Your problem has been recorded. Admin will respond soon');
  }
  return(
    <form className='Report a problem'>
         <label>If you have any problem, please report it in the section below</label>
        <div className="input-container">
        <div>
        <div>
        <label>Enter the type of problem below(financial, technical, other)</label>
        </div>
         <input 
            type="textarea"
            onChange= {(e) => setTypeOfProblem(e.target.value)}
            value = {TypeOfProblem}
          />
        </div>

        <div>
        <div>
        <label>Enter the problem </label>
        </div>
        <input 
            type="textarea"
            style={{width: "370px", height:"200px"}}
            onChange= {(e) => setProblem(e.target.value)}
            value = {Problem}
          />
        </div>
        </div>
          
        <Button    variant="contained"
            onClick={() =>{
                reportITProblem();
                sendMessage();
              }}
            margin="normal"
            padding="normal"
            >Submit</Button>

        <div className='viewProblems'>
        <Button variant="contained"
        onClick={viewITReportedProblems}
        margin="normal"
        padding="normal"
        >View Reported Problems</Button>
        </div>

        <br/>
        <br/>
        <br/>
      
        {Problems.map((ReportedProblems, index) => (
            
            <div key={index}>
            <div>
            
            <p ><strong>Type of problem: </strong>{ReportedProblems.TypeOfProblem}</p>
            <p ><strong>Problem is: </strong>{ReportedProblems.Problem}</p>
            <p ><strong>Status: </strong>{ReportedProblems.Status}</p>
            <hr/>
            </div>
    
          </div> 
        
            
            
       ))}
    </form>
 )
}

export default IndividualTraineeReportedProblem;