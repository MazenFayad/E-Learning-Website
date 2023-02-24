// import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Ads from "../components/Ads"
import { Col, Row } from "react-bootstrap";
const { useState } = require("react");



const Home = ({ x, y, type, z }) => {
  const [review, setReview] = useState([]);

  const sendMessage = () => {
    alert('Review editted successfully');
  }

  const id = "638cb24aec086a5a3fdd16fa"

  const editReview = async () => {

    await axios.post(`http://localhost:4000/editReview/${id}?Reviews=${review}`)
      .then(
        (res) => {

          //  const Discountt = res.data
          // console.log(Discountt);
          // setDiscount1(Discountt)
          console.log(res.data)
        }
      );
  }

  return (<div>
{type!="Admin"&&type!="Guest"&&(<div>
                <h3 style={{color:'blue' , marginTop:'20px'}}>Most Popular Courses</h3>
                <Row style={{width:'100%'}}>
                    <Col className="firstCol">
                        <br></br>
                        <img src="https://s3.amazonaws.com/coursesity-blog/2021/04/Computer_Network_Classes.png" className="imageSize"></img>
                        <h5 style={{color:'black'}}>Name: Networks Course</h5>
                        <h5 style={{color:'black'}}>Rating: 4.9</h5>
                    </Col>

                    <Col className="firstCol">
                    <br></br>
                    <img src="https://store.hp.com/app/assets/images/uploads/prod/microcontroller-vs-microprocessor-whats-the-difference-hero1573577204165297.jpg" className="imageSize"></img>
                    <h5 style={{color:'black'}}>Name: Microporcessors Course</h5>
                    <h5 style={{color:'black'}}>Rating: 4.8</h5>
                    </Col>

                    <Col className="firstCol">
                    <br></br>
                    <img src="https://miro.medium.com/max/750/1*jGtzzbyshVAnYHrslLtbAg.jpeg" className="imageSize"></img>
                    <h5 style={{color:'black'}}>Name: Web development Course</h5>
                    <h5 style={{color:'black'}}>Rating: 4.7</h5>
                    </Col>
                </Row>
            </div>)}
    {type!="Guest" && (<div>  {/* <h1>{type}</h1> */}
      <br></br>
      {x && (<Link to='/P' className="btn btn-primary"  >ResetPassword</Link>)}
      <br />
      <br />
      {/* {y && (<Link to='/F' className="btn btn-primary" >ForgetPassword</Link>)} */}
      <br />
      <br />
      {z && (<label style={{ marginRight: "5px" }}><strong>Enter new Review: </strong></label>)}
      {z && (<input
        type="text"
        placeholder='new Review'
        onChange={(e) => setReview(e.target.value)}
        value={review}
      />)}
      <br></br>
      <br></br>
      {z && (<Button type='submit' variant="contained"
        onClick={() => {
          editReview();
          sendMessage();
        }}
        margin="normal"
        padding="normal"
      >Submit</Button>)}</div>)}
    {type=="Guest"&&(<div>
      <Ads/>
    </div>)
    }
  </div>

  );
}
export default Home

