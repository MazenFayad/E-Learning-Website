//import axios from 'axios';

//import {useState} from 'react';


/*const RateCourse = (probs) => {
        //Get the rating once user clicks on submit
        const id="635af7be802b412cbe827003"
        const params = new URLSearchParams(window.location.search);
        const rate = params.get('Rate');       //Rate is the name of attribute name in select tag
        console.log(rate);
    

        event.preventDefault();
        const mypost = { rate, id};
        console.log(mypost);
        //setwaitingServer(true);
       
            fetch('/api/islam', {
                method: 'POST',
                body: JSON.stringify(mypost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json)).then(() => {
                    //setwaitingServer(false);
                    //navigator('/posts')
                });
        
   


    return (
    <div>
        <form action=''>
            <label>Rate Course: </label>
            <select name="Rate" id="Rate">
                <option value="1" id="1">1</option>
                <option value="2" id="2">2</option>
                <option value="3" id="3">3</option>
                <option value="4" id="4">4</option>
                <option value="5" id="5">5</option>
            </select>
            <br></br>
            <button type='submit' className="submitButton" onClick = {submitHandler}>Submit</button>
        </form>
    </div>
    )
};

export default RateCourse;
*/
import axios from 'axios';
import React, { useState } from 'react';
import '../App.css';
//import {useState} from 'react';


const RateCourse = ({id}) => {
        //Get the rating once user clicks on submit
        const[rate,setRate]=useState(1);

      //Rate is the name of attribute name in select tag
        console.log(rate);
    
    const submitHandler = async() =>{

      

        const mypost={            id,
            rate}
        fetch('\islam', {
            method: 'POST',
            body: JSON.stringify(mypost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json)).then(() => {
                //setwaitingServer(false);
                //navigator('/posts')
            });

    }

    function displayRadioValue() {
        var ele = document.getElementsByName('question1');

        for (let i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    }
    // const [x, setX] = useState('Title');

    return (
        <div className="dropdown">

            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-bs-toggle="dropdown" aria-expanded="false" >
                rating:{rate}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="1" id="Checkme1" name="question1" onChange={() => {
                                // setX(displayRadioValue());
                                setRate(displayRadioValue());
                                submitHandler();
                            }} />
                            <label className="form-check-label" htmlFor="Checkme1">1</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="2" id="Checkme2" name="question1" onChange={() => {
                                // setX(displayRadioValue());
                                setRate(displayRadioValue());
                                submitHandler();
                            }} />
                            <label className="form-check-label" htmlFor="Checkme2">2</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="3" id="Checkme3" name="question1" onChange={() => {
                                // setX(displayRadioValue());
                                setRate(displayRadioValue());
                                submitHandler();
                            }} />
                            <label className="form-check-label" htmlFor="Checkme3">3</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="4" id="Checkme4" name="question1" onChange={() => {
                                // setX(displayRadioValue());
                                setRate(displayRadioValue());
                                submitHandler();
                            
                            }} />
                            <label className="form-check-label" htmlFor="Checkme3">4</label>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="Price" id="Checkme5" name="question1" onChange={() => {
                                // setX(displayRadioValue());
                                setRate(displayRadioValue())
                            }} />
                            <label className="form-check-label" htmlFor="Checkme3">Price</label>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default RateCourse;