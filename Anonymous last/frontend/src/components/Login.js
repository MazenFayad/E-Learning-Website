import React, { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Card from 'react-bootstrap/Card';
export default function Login({ Setmyid, setGuest }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigator = useNavigate();
    //const [t,setT]=useState(null);

    async function handleLogin(e) {
        e.preventDefault();
        if (!email) {
            return toast.error("please enter your email")
        }

        if (!password) {
            return toast.error("please enter your password")
        }

        await axios.post("/login", {
            email,
            password,

        })
            .then((response) => {

                if (response.data.message === "email is incorrect" || response.data.message === "password is incorrect") {

                    return toast.error(response.data.message)
                }
                else {
                    const token = response.data.send.token;
                    
                    //set JWT token to local
                    localStorage.setItem("token", token);
                    //set token to axios common header
                    const t = localStorage.getItem('token');
                    const decodedToken = jwt_decode(t);
                    const id = decodedToken.id;
                    console.log(response.data.type);
                    if (response.data.type === "instructor") {
                        // redirect
                        setGuest(1);
                        const type="Instructor";
                        localStorage.setItem("type", type);


                    }
                    if (response.data.type === "individual") {
                        // redirect
                        const type="Individual Trainee";
                        localStorage.setItem("type", type);
                        setGuest(3);

                    }
                    ///misssing admin pageeeeeeeee--------------------
                    if (response.data.type === "admin") {
                        // redirect
                        const type="Admin";
                        localStorage.setItem("type", type);
                        
                        setGuest(4);

                    }

                    if (response.data.type === "corporate") {
                        // redirect Corporate Trainee
                        const type="Corporate Trainee";
                        localStorage.setItem("type", type);
                        setGuest(2);
                    }
                    Setmyid(id);
                    navigator('/');
                }

            })
            .catch((err) => {
                return toast.error(err)
            })
    }
    return (

        <div className="omar1">
            <Card className="logInCard">
                <form className="colorTest" onSubmit={handleLogin} style={{marginTop:"75px"}}>
                    <ToastContainer position = 'bottom-center' limit={1}></ToastContainer>
                    <img src="https://github.com/elinsoftware/portal-login-react/blob/master/src/login.png?raw=true" style={{width:'250px'}}></img>
                    <br></br>
                    <Card.Text>We are <strong><span style={{color:"blue"}}>A</span></strong>nonymous</Card.Text>
                    <p >Log in to build skills for today, tomorrow, and beyond.</p>
                    {/* <input className="form-control " type="email" placeholder = "Email" value = {email} aria-label="Search" onChange = {(e) => setEmail(e.target.value)} /> */}
                    <input type = "email" placeholder = "Email" value = {email} onChange = {(e) => setEmail(e.target.value)} />
                    <br></br>
                    <br></br>
                    <input type = "password" placeholder = "Password" value = {password} onChange = {(e) => setPassword(e.target.value)} />
                    {/* <input className="form-control me-2" type="password" placeholder = "Password" value = {password} aria-label="Search" onChange = {(e) => setPassword(e.target.value)} /> */}
                    <br></br>
                    <br></br>
                    <button  style={{width:'100px' , backgroundColor:'#0466c8' , color:"white" , border:"none" , borderRadius:"5px"}} >Log in</button>
                    <br/>
                    <p>You do not have an account? <Link to="/signup"  > <span>SignUp</span></Link> </p>
 
                   <p> <Link to="/F"> <span>ForgetPassword</span></Link> </p>
                    <br></br>
                </form>
            </Card>  
        </div>






    )
    // you do not have an account
}


