import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// 'https://www.youtube.com/watch?v=L93hyPiltLA'
import jwt_decode from "jwt-decode";



const PreviewCourse = () => {
  const t = localStorage.getItem('token');
  const decodedToken = jwt_decode(t);
  const id = decodedToken.id;
 const [url, seturl] = useState("");

const[youtubeVideo, setYoutubeVideo] = useState('')
const[youtubeURL, setYoutubeURL] = useState('')

const[youtubeVideo1, setYoutubeVideo1] = useState('') // week1
const[youtubeVideo2, setYoutubeVideo2] = useState('') // week2
const[youtubeVideo3, setYoutubeVideo3] = useState('') // week3
const[youtubeVideo4, setYoutubeVideo4] = useState('') // week4

const[youtubeURL1, setYoutubeURL1] = useState('')//week1
const[youtubeURL2, setYoutubeURL2] = useState('')// week2
const[youtubeURL3, setYoutubeURL3] = useState('')// week3
const[youtubeURL4, setYoutubeURL4] = useState('')// week4

const [Subtitlenew, setnewSubtitle] = useState([]);
// const [inputText, setInputText] = useState("");
const [text1, setText1] = useState("");    
const [text2, setText2] = useState("");    
const [text3, setText3] = useState("");    
const [text4, setText4] = useState("");     

//   const changeText = (e) => {
//     setInputText(e.target.value);

    
//   }

  const handleSubmit1 = (event) => {
    event.preventDefault();
    setText1(event.target[0].value);
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    setText2(event.target[0].value);
  };
  const handleSubmit3 = (event) => {
    event.preventDefault();
    setText3(event.target[0].value);
  };
  const handleSubmit4 = (event) => {
    event.preventDefault();
    setText4(event.target[0].value);
  };
//   const logValue = () => {
//     console.log(inputText);
//     return(
//         <div>{inputText}</div>
//     )
//   };

//**************** Preview Course ********************************/
const handleYoutubeChange=(e)=>{
    setYoutubeVideo(e.target.value);
    seturl(e.target.value);
}

const handleYoutubeSubmit=(e)=>{
    e.preventDefault();
    setYoutubeURL(youtubeVideo)
}

//**************** Week1 ********************************/
const handleYoutubeSubmit1=(e)=>{
    e.preventDefault();
    setYoutubeURL1(youtubeVideo1)
}

const handleYoutubeChange1=(e)=>{
    setYoutubeVideo1(e.target.value);
}

const handleYoutubeSubmit2=(e)=>{
    e.preventDefault();
    setYoutubeURL2(youtubeVideo2)
}
const handleYoutubeSubmit3=(e)=>{
    e.preventDefault();
    setYoutubeURL3(youtubeVideo3)
}

const handleYoutubeSubmit4=(e)=>{
    e.preventDefault();
    setYoutubeURL4(youtubeVideo4)
}







//***** */

const handleYoutubeChange2=(e)=>{
    setYoutubeVideo2(e.target.value);
}
//**** */
const handleYoutubeChange3=(e)=>{
    setYoutubeVideo3(e.target.value);
}
//**** */
const handleYoutubeChange4=(e)=>{
    setYoutubeVideo4(e.target.value);
}

const getSubtitle =  async () => {
    // await axios.get(`http://localhost:4000/viewcourses/${id}`).then(
      await axios.get(`http://localhost:4000/getSubtitle/${id}`).then(
        (res) => { 
        const Subtitlenew = res.data
       
        setnewSubtitle(Subtitlenew)
        console.log(Subtitlenew)
    }
     );
}

// const navigate = useNavigate(); 

const AddURL  = async () =>{
    await axios.post(`http://localhost:4000/addurl/${id}?URL=${url}`)
    .then(
    (res) => { 
      console.log(res.data)
  }
  );
  }

    
    return(
        <div className='wrapper'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
            <Button id='button' type='submit'  variant="contained"
                onClick={() =>{
                    getSubtitle();
                  }}
                margin="normal"
                padding="normal"
                style={{marginTop:"570px" , marginRight:"620px"}}
                >Open Subtitles</Button>
                
                <h2 style={{marginTop:"500px"}}>Preview Course</h2>
            <form className='form-group from' onSubmit={handleYoutubeSubmit}>
                <div>
                <input type = 'text' className='form-control' placeholder='Enter youtube URL' required onChange={handleYoutubeChange}></input>
                <br></br>
                <button type='submit' className='btn btn-primary btn-md' onClick={() =>{
                    AddURL()
                  }}>UPLOAD</button>
                </div>
                <br></br>
            </form>
            <div className='youtube-box'>
                    <ReactPlayer url = {youtubeURL} className='video' controls/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2>Subtitles</h2>
            {Subtitlenew.map((subtitle, index) => (
              
                <div className='subtitle' key={index} >
                      <ul  type="disc">
                  <li >{subtitle}</li>
                  </ul>
              </div>
              
          
        ))}

          <form className='form-group from' onSubmit={handleYoutubeSubmit1}>
         <input type = 'text' className='form-control' placeholder='Enter youtube URL' required onChange={handleYoutubeChange1}></input>
         {/* <br></br> */}
         <div className='youtube-box'>
                    <ReactPlayer url = {youtubeURL1} className='video' controls/>
                    
            </div>
         <Button  type='submit'  variant="contained"
              
                margin="normal"
                padding="normal"
                >Upload video</Button> 
                </form>

                <div className="App">
                    <form onSubmit={handleSubmit1}>
                      <h5>{text1}</h5>
                      <input style={{marginRight:"10px"}} type="text" placeholder='Enter Description'/>
                      {/* <br></br>
                      <br></br> */}
                     <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
      
                 </div>
                
                {/* <br></br> */}
                <form className='form-group from' onSubmit={handleYoutubeSubmit2}>
         <input type = 'text' className='form-control' placeholder='Enter youtube URL' required onChange={handleYoutubeChange2}></input>
         {/* <br></br> */}
         <div className='youtube-box'>
                    <ReactPlayer url = {youtubeURL2} className='video' controls/>
                    
            </div>
            {/* <br></br> */}
         <Button  type='submit'  variant="contained"
              
                margin="normal"
                padding="normal"
                >Upload video</Button>
                
                </form>

                <div className="App">
                    <form onSubmit={handleSubmit2}>
                      <h5>{text2}</h5>
                      <input  type="text" placeholder='Enter Description'/>
                      {/* <br></br>
                      <br></br> */}
                     <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
      
                 </div>
                {/* <br></br> */}
                
                <form className='form-group from' onSubmit={handleYoutubeSubmit3}>
         <input type = 'text' className='form-control' placeholder='Enter youtube URL' required onChange={handleYoutubeChange3}></input>
         {/* <br></br> */}
         <div className='youtube-box'>
                    <ReactPlayer url = {youtubeURL3} className='video' controls/>
            </div>
            {/* <br></br> */}
         <Button  type='submit'  variant="contained"
              
                margin="normal"
                padding="normal"
                >Upload video</Button>
                
                </form>

                <div className="App">
                    <form onSubmit={handleSubmit3}>
                      <h5>{text3}</h5>
                      <input  type="text" placeholder='Enter Description'/>
                      {/* <br></br>
                      <br></br> */}
                     <button type="submit" className='btn btn-primary'>Submit</button>
                    </form>
      
                 </div>
                {/* <br></br> */}
                <form className='form-group from' onSubmit={handleYoutubeSubmit4}>
         <input type = 'text' className='form-control' placeholder='Enter youtube URL' required onChange={handleYoutubeChange4}></input>
         {/* <br></br> */}
         <div className='youtube-box'>
                    <ReactPlayer url = {youtubeURL4} className='video' controls/>
                    
            </div>
            {/* <br></br> */}
         <Button  type='submit'  variant="contained"
              
                margin="normal"
                padding="normal"
                >Upload video</Button>
                
                </form>

                <div className="App">
                    <form onSubmit={handleSubmit4}>
                      <h5>{text4}</h5>
                      <input  type="text" placeholder='Enter Description'/>
                      {/* <br></br>
                      <br></br> */}
                     <button type="submit" className='btn btn-primary'>Submit</button>
                    </form>
      
                 </div>
                <br></br>
        </div>
           
        

    )



}

export default PreviewCourse