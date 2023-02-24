//import axios from 'axios';
import React from 'react';
import '../App.css';
//import {useState} from 'react';

const InstructorRating = () => {
    
    //Get the rating once user clicks on submit
    const params = new URLSearchParams(window.location.search);
    const rate = params.get('Rate');       //Rate is the name of attribute name in select tag
    console.log(rate);

    return (
    <div>
        <form action=''>
            <label>Rate Instructor: </label>
            <select name="Rate" id="Rate">
                <option value="1" id="1">1</option>
                <option value="2" id="2">2</option>
                <option value="3" id="3">3</option>
                <option value="4" id="4">4</option>
                <option value="5" id="5">5</option>
            </select>
            <br></br>
            <button type='submit' className="submitButton">Submit</button>
        </form>
    </div>
    )
};

export default InstructorRating;