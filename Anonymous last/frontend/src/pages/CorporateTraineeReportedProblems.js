import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
const { useState} = require("react");

const CorporateTraineeReportedProblems= () => {
  const t = localStorage.getItem('token');
  const decodedToken = jwt_decode(t);
  const id = decodedToken.id;
    const navigate = useNavigate(); 
    const [TypeOfProblem, setTypeOfProblem] = useState([]);
    const [Problem, setProblem] = useState([]);

     //viewReportedProblems
    const [Problems, setProblems] = useState([]);

  

    const reportCTProblem = async() =>{
        const body = {TypeOfProblem, Problem};
        await axios.post(`http://localhost:4000/reportCTProblem/${id}`, body)
        .then(
        (res) => { 
          console.log(res.data)
        }
        );
    }

    const viewCTReportedProblems =  async () => {
        await axios.get(`http://localhost:4000/viewCTReportedProblems/${id}`).then(
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
    <form className='Report a problem' style={{marginTop:"20px"}}>
        <h3>If you have any problem, please report it in the section below</h3>
        <div className="input-container">
        <div>
        <br/>
        <label>Enter the type of problem below(financial, technical, other)</label>
        <br/>
        <input 
            type="textarea"
            onChange= {(e) => setTypeOfProblem(e.target.value)}
            value = {TypeOfProblem}
          />
        </div>
        <br/>

        <div>
        <div>
        <label>Enter the problem below</label>
        </div>
        <input 
            type="textarea"
            style={{width: "370px", height:"200px"}}
            onChange= {(e) => setProblem(e.target.value)}
            value = {Problem}
          />
        </div>
        </div>
        <br></br>
        <Button    variant="contained"
            onClick={() =>{
                reportCTProblem();
                sendMessage();
              }}
            className="btn btn-primary"
            margin="normal"
            padding="normal"
            >Submit</Button>
        <br/>
        <br/>
        <div className='viewProblems'>
        <Button variant="contained"
        onClick={viewCTReportedProblems}
        margin="normal"
        padding="normal"
        >View Reported Problems</Button>
        </div>
        <br/>
        <br/>
        
      
        {Problems.map((ReportedProblems, index) => (
            
              <div key={index}>
                <div>
                
                <p ><strong>Type of problem: </strong>{ReportedProblems.TypeOfProblem}</p>
                <p ><strong>Problem: </strong>{ReportedProblems.Problem}</p>
                <p ><strong>Status: </strong>{ReportedProblems.Status}</p>
                <hr/>
                </div>
        
              </div> 
            
            
       ))}
    
    </form>
 )
}

export default CorporateTraineeReportedProblems;