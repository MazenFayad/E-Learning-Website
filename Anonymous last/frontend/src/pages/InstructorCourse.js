import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
const { useState } = require("react");


const InstructorCourse= () => {
  const t = localStorage.getItem('token');
  const decodedToken = jwt_decode(t);
  const id = decodedToken.id;
    const [Title, setTitle] = useState([]);
    const [Discount, setDiscount] = useState([]);
    const [Rating,setRating] = useState([]);
    const [Hours, setHours] = useState([]);
    const [Price, setPrice] = useState([]);
    const [ShortSummary, setShortSummary] = useState([]);
    const [Major, setMajor] = useState([]);
    const [Reviews, setReviews] = useState([]);
    const [Subtitle1, setSubtitle1] = useState([]);
    const [Subtitle2, setSubtitle2] = useState([]);
    const [Subtitle3, setSubtitle3] = useState([]);
    const [Subtitle4, setSubtitle4] = useState([]);

    

    const [Discount1, setDiscount1] = useState([]);

  

    const createCourse= async () =>{
        await axios.post(`http://localhost:4000/createcourse/${id}?Hours=${Hours}&Title=${Title}&Major=${Major}&Discount=${Discount}&Subtitles=${Subtitle1}&Subtitles=${Subtitle2}&Subtitles=${Subtitle3}&Subtitles=${Subtitle4}&Price=${Price}&ShortSummary=${ShortSummary}`)
        .then(
         (res) => { 
          console.log(res.data)

   }
    );
}

const editDiscount = async () =>{
  await axios.post(`http://localhost:4000/editDiscount/${id}?Discount=${Discount1}`)
  .then(
   (res) => { 
      
    //  const Discountt = res.data
      // console.log(Discountt);
      // setDiscount1(Discountt)
    console.log(res.data)
}
);
}




  const sendMessage = () => {
    alert('Course added successfully');
  }

  const sendMessage1 = () => {
    alert('Discount edited successfully');
  }


const navigate = useNavigate();
    return(
        <form className='Create Course'>
        <label><h4>Create Course: </h4></label>
        <br></br>
                <input 
                type="text"
                placeholder='Enter Title'
                onChange= {(e) => setTitle(e.target.value)}
                value = {Title}
                style={{marginRight:"15px"}}
              />
              <input 
                type="text"
                placeholder='Enter Discount'
                onChange={(e) => setDiscount(e.target.value)}
                value = {Discount}
                style={{marginRight:"15px"}}
              />
              {/* <input 
                type="text"
                placeholder='Enter Rating'
                onChange= {(e) => setRating(e.target.value)}
                value = {Rating}
              
              /> */}
              <input 
                type="text"
                placeholder='Enter Hours'
                onChange= {(e) => setHours(e.target.value)}
                value = {Hours}
                style={{marginRight:"15px"}}
              />
              <input 
                type="text"
                placeholder='Enter Price'
                onChange= {(e) => setPrice(e.target.value)}
                value = {Price}
                style={{marginRight:"15px"}}
              />
              <input 
                type="text"
                placeholder= 'Enter Short Summary'
                onChange={(e) => setShortSummary(e.target.value)}
                value = {ShortSummary}
                style={{marginRight:"15px"}}
              />
              <br></br>
              <br></br>
              <input 
                type="text"
                placeholder= 'Enter Subject'
                onChange={(e) => setMajor(e.target.value)}
                value = {Major}
                style={{marginRight:"15px"}}
              />

                {/* <input 
                type="text"
                placeholder= 'Enter Review'
                onChange={(e) => setReviews(e.target.value)}
                value = {Reviews}
              /> */}

              <input 
                type="text"
                placeholder= 'Enter Subtitle 1'
                onChange={(e) => setSubtitle1(e.target.value)}
                value = {Subtitle1}
                style={{marginRight:"15px"}}
              />
              <input 
                type="text"
                placeholder= 'Enter Subtitle 2'
                onChange={(e) => setSubtitle2(e.target.value)}
                value = {Subtitle2}
                style={{marginRight:"15px"}}
              />
              <input 
                type="text"
                placeholder='Enter Subtitle 3'
                onChange={(e) => setSubtitle3(e.target.value)}
                value = {Subtitle3}
                style={{marginRight:"15px"}}
              />
              <input 
                type="text"
                placeholder= 'Enter Subtitle 4'
                onChange={(e) => setSubtitle4(e.target.value)}
                value ={Subtitle4}
                style={{marginRight:"15px"}}
              />
              <br></br> 
              <br></br> 
              <Button  variant="contained"
                onClick={() =>{
                    createCourse();
                    sendMessage();   
                    navigate('/PreviewCourse');
                  }}
                margin="normal"
                padding="normal"
                >create Course</Button>
                <br></br>
                <br></br>
          <label><h5>Enter new Discount: </h5></label>
          <br></br>
              <input 
                type="text"
                placeholder= 'Discount with period'
                onChange={(e) => setDiscount1(e.target.value)}
                value = {Discount1}
              />
              <br></br>
              <br></br>
              <Button    variant="contained"
                onClick={() =>{
                    editDiscount();
                    sendMessage1();
                  }}
                margin="normal"
                padding="normal"
                >Submit</Button>
            </form>
    )
}

export default InstructorCourse;