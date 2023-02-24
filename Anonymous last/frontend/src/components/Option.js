import React from "react";
import '../App.css';

export default function Option(props) {
    const styles = {
        marginTop: 8,
                padding: 16,
                border: "3px solid white",
                borderRadius: 20,
                fontize: 15,
    }
    

    let variable
    if(props.isRed)
    {
        variable = "#FF0000"
    }
    if(props.isGreen)
    {
        variable = "#00FF00"
    }
    if(props.isGrey)
    {
        variable = "#5A5A5A"
    }
    styles.backgroundColor = variable
    return (
       
        <div>
            <ul>
                <li style = {styles} key = {props.id} onClick = {() => props.handleClick(props.id)}>
                    {props.text}  
                </li>
            </ul>
            
        </div>
    )
}