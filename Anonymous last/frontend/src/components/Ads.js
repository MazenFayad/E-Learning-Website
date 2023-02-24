import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
class Ads extends Component {
    render() {
    return (
    <div>
        <Row style={{width:"100%" , marginTop:"80px"}}>
            <Col style={{marginLeft:"20px"}}>
                <h3 style={{marginTop:'100px',marginLeft:"190px"}}><span style={{color:"blue"}}>A</span>nonymous business</h3>
                <strong><h2 style={{marginTop:'20px',marginLeft:"200px"}}>Upskill your team with Udemy Business</h2></strong>
                <li style={{marginLeft:"205px" , fontSize:"17px"}}>Unlimited access to 1,000+ top Udemy courses, anytime, anywhere</li>
                <li style={{marginLeft:"190px" , fontSize:"17px"}}>International course collection in 14 languages</li>
                <li style={{marginLeft:"128px" , fontSize:"17px"}}>Top certifications in tech and business</li>
            </Col>
            <Col>
                <img src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_1200x1200.jpg" height={450}></img>
            </Col>
        </Row>
        <Row style={{marginTop:"150px"}}>
            <Col>
            <img src="https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg" height={390} style={{marginRight:"-300px" , marginTop:"-80px"}}></img>
            </Col>
            <Col>
            <h2>Become an instructor</h2>
            <h5>Instructors from around the world teach</h5> 
            <h5 style={{marginLeft:"67px"}}>millions of students on <strong><span style={{color:"blue"}}>A</span></strong>nonymous.We provide </h5>
            <h5 style={{marginLeft:"25px"}}>the tools and skills to teach what you love.</h5>
            </Col>
        </Row>

        <Row style={{marginTop:"100px" , marginBottom:"-200px"}}>
            <div className="testing">
                <MDBFooter className='bg-dark text-center text-white'>
                    <MDBContainer className='p-4 pb-0'>
                        <SocialIcon url="https://facebook.com/jaketrent" style={{marginBottom:'10px',marginRight:'10px'}}/>
                        <SocialIcon url="https://linkedin.com/jaketrent" style={{marginBottom:'10px'}}/>
                    </MDBContainer>
                <div>
                    <a style={{marginRight:'15px'}}>About Us</a>
                    <a style={{marginRight:'15px'}}>Cookie Policy</a>
                    <a style={{marginRight:'15px'}}>Site Map</a>
                    <a style={{marginRight:'15px'}}>Contact Us</a>
                    <a style={{marginRight:'15px'}}>Careers</a>
                </div>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    Copyrights © 2023
                    <a className='text-white' href='/Home' style={{marginLeft:'5px'}}>
                        www.Anonymous.com
                    </a>
                </div>
                </MDBFooter>
            </div>
        </Row>
    </div>
    );
}
}

export default Ads;