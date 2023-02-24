import React from "react"

export default function Logout() {
    const navigator = useNavigate();
    function handleClick() {
        localStorage.removeItem('token')
        // redirect to page login
        navigator('/');

        //localStorage.getItem('token') if not null it means i am logged in else log out.
    }
    return (
        <button onClick = {handleClick}>log out</button>
        //hena kda da malosh lzma ana 7ato f el navbar.... okay zwd b2a 7tet el token 
    )
} 

