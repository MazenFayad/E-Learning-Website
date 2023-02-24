import {React, useState } from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import axios from 'axios'

function PasswordForget () {
    const [email, setEmail] = useState('');
    
    const submitHandler = async(event) => {
        event.preventDefault();
        if(!email) {
            return toast.error('please enter your email')
        }

        await axios.post('/api/email', {
            email,
        })
        .then((response) => {
            return toast.success(response.data.message)
        })
        .catch((err) => {
            return toast.error(err)
        })

    }
  

   
    return ( 
    <div style={{marginTop:"20px"}}>
            <ToastContainer position = 'bottom-center' limit={1}></ToastContainer>
            <form onSubmit = {submitHandler}>
                <label htmlFor = "email" style={{marginRight:"35px"}}>Please enter your email:</label>
                <br></br>
                <input placeholder="Email" onChange = {(e) => setEmail(e.target.value)}></input>
                <br/>
                <br/>
                <button type = "submit" className="btn btn-primary">submit</button>
            </form>
        </div>
     )
   
}

export default PasswordForget

