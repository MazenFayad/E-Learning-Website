import {React, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

function PasswordReset({z}) {
    const [username, setusername] = useState('');
    const [oldPassword, setoldPassword] = useState('');
    const [newPassword, setnewPassword] = useState('');
    

    const confirmHandler = async(event) => {
        event.preventDefault();
        if(!username || !oldPassword || !newPassword) {
            return toast.error('please enter your email, password, new password')
        }

        
            await axios.post('/api/query'+z, {
                username,
                oldPassword,
                newPassword,
            })
            .then((response) => {
                return toast.success(response.data.message)
            })
            .catch((err) => {
                return toast.error(err)
            })
    }    
        return <div style={{marginTop:"20px"}}>
            <ToastContainer position = 'bottom-center' limit={1}></ToastContainer>
            <form onSubmit = {confirmHandler}>
                <input type = "email" placeholder = "Email" onChange = {(e) => setusername(e.target.value)} />
                <br/>
                <br></br>
                <input type = "password" placeholder = "Password" onChange = {(e) => setoldPassword(e.target.value)} />
                <br/>
                <br></br>
                <input type = "password" placeholder = "New password" onChange = {(e) => setnewPassword(e.target.value)} />
                <br/>
                <br></br>
                <button type = "submit" className="btn btn-primary"> Confirm</button>

            </form>
           

            
        </div>
    
}

export default PasswordReset

