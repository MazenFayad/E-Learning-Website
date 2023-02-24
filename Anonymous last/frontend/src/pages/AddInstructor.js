import axios from "axios"
import React, { useState } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import {useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Card from 'react-bootstrap/Card';
import Policiy from "./Policiy";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function AddInstructor() {
    const navigator=useNavigate();
    const [Email, setEmail] = useState()
    const [Username, setUsername] = useState()
    const [Password, setPassword] = useState()
    const [Firstname, setFirstname] = useState()
    const [Lastname, setLastname] = useState()
    const [gender, setGender] = useState()
    const [type, setType] = useState("instructor");
    const sendMessage = () => {
        alert('aded successfully');
      }

    async function handleSubmit(event) {
        event.preventDefault();
        if(!Email || !Username || !Password || !Firstname || !Lastname || !gender || !type) {
            return toast.error("please fill the required data")
        }

        await axios.post("/signup", {
            Email,
            Password,
            type,
            Username,
        })
        .then((response) => {
            if(response.data.message === "this email is already used")
            {
                return toast.error("this email is already used")
            }
            else {
                <Link to="/login" >SignUp</Link>
            }
        })
        .catch((err) => {
            return toast.error(err)
        })
       sendMessage();
    }

    return (
        <div className="omar">
            <Card className="signUpCard" >
                <form onSubmit = {handleSubmit} className="colorTest"  style={{marginTop:"53px"}}>
                <img src="https://github.com/elinsoftware/portal-login-react/blob/master/src/login.png?raw=true" style={{width:'250px'}}></img>
                    <Card.Text>We are <strong><span style={{color:"blue"}}>A</span></strong>nonymous</Card.Text>
                    <ToastContainer position = 'bottom-center' limit={1}></ToastContainer>
                    <input className="signUpForm" type = "text" placeholder = " Firstname" value = {Firstname} onChange = {(e) => setFirstname(e.target.value)} required/>
                    <input className="signUpForm" type = "text" placeholder = " Lastname" value = {Lastname} onChange = {(e) => setLastname(e.target.value)} required/>
                    <br></br>
                    <br></br>
                    <input className="signUpForm" type = "text" placeholder = " Username" value = {Username} onChange = {(e) => setUsername(e.target.value)} required/>
                    <input className="signUpForm" type = "email" placeholder = " Email" value = {Email} onChange = {(e) => setEmail(e.target.value)} required/>
                    <br/>
                    <br/>
                    <input className="signUpForm" type = "password" placeholder = " Password" value = {Password} onChange = {(e) => setPassword(e.target.value)} required/>
                    <br/>
                    <br></br>
                    <input type = "radio" name = "gender" value = "male" onChange = {(e) => setGender(e.target.value)} checked = {gender === "male"}/> <span >Male &nbsp;</span>                         
                    <input type = "radio" name = "gender" value = "female" onChange = {(e) => setGender(e.target.value)} checked = {gender === "female"}/> <span >Female</span>          
                    <br/>
                    <div style={{marginTop:'10px'}}>
                    </div>
                    <button style={{width:'100px' , backgroundColor:'#0466c8' , color:"white" , borderRadius:"5px" , border:"none" }} onClick={(event)=>{handleSubmit(event)}} >addAdmin</button>
                </form>
            </Card>
        </div>
    )    
}