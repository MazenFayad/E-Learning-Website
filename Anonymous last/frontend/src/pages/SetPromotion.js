import axios from 'axios';
import Button from '@mui/material/Button';
import React from 'react';
const { useState } = require("react");

const SetPromotion = () =>{

   //Set Promotion
    const [Price, setPrice] = useState([]);
    const [Discount, setDiscount] = useState([]);

    //Set Specific Promotion
    const [Title, setTitle] = useState([]);
    const [Price2, setPrice2] = useState([]);
    const [Discount2, setDiscount2] = useState([]);


  

    const setPromotion = async()=>{
        await axios.post(`http://localhost:4000/setPromotion?Price=${Price}&Discount=${Discount}`).then(
            (res) =>{
                console.log(res.data)
            }
        )
    }

    const setSpecificPromotion = async() =>{
      await axios.post(`http://localhost:4000/setSpecificPromotion?Title=${Title}&Price=${Price2}&Discount=${Discount2}`).then(
        (res) =>{
            console.log(res.data)
        }
    )
    }

   

    const sendMessage = () => {
        alert('Promotion setted successfully');
      }

      const refreshPage = ()=>{
        window.location.reload();
     }

    

    return(
        <form >
            <div className='set Promotion'>
            <h4>Set Promotion for several courses</h4>
            <label>Enter the price of the course/courses: </label>
            <br/>
            <input 
                type="text"
                placeholder='Enter Price'
                onChange= {(e) => setPrice(e.target.value)}
                value = {Price}
              />
            <br/>
            <br/>

            <label>Set a promotion: </label>
            <br/>
             <input 
                type="text"
                placeholder='Enter Discount'
                onChange={(e) => setDiscount(e.target.value)}
                value = {Discount}
              />
              <br/>
              <br/>
              
              <Button variant="contained"
                onClick={() =>{
                    setPromotion();
                    sendMessage();
                    refreshPage();
                  }}
                margin="normal"
                padding="normal"
                >Submit</Button>
            </div> 
            <div>
          </div>
          <hr/>


          <div className='set specific promotion'>
          <h4>Set Promotion for a specific course</h4>
          <br/>
          <label>Enter the title of the course:</label>
          <br/>
          <input 
                type="text"
                placeholder='Enter Title'
                onChange= {(e) => setTitle(e.target.value)}
                value = {Title}
              />
          <br/>
          <br/>
          <label>Enter the current price of this course: </label>
            <br/>
            <input 
                type="text"
                placeholder='Enter Price'
                onChange= {(e) => setPrice2(e.target.value)}
                value = {Price2}
              />
            <br/>
            <br/>
            <label>Set a promotion: </label>
            <br/>
             <input 
                type="text"
                placeholder='Enter Discount'
                onChange={(e) => setDiscount2(e.target.value)}
                value = {Discount2}
              />
              <br/>
              <br/>
            <Button variant="contained"
                onClick={() =>{
                    setSpecificPromotion();
                    sendMessage();
                    refreshPage();
                  }}
                margin="normal"
                padding="normal"
                >Submit</Button>
          </div>

            

          
            


        </form>

    )
}

export default SetPromotion