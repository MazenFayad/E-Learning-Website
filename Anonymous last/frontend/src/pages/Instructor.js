import axios from 'axios';
import Button from '@mui/material/Button';
//import TableCell from '@mui/material/TableCell';
//import TableRow from '@mui/material/TableRow';
import React from 'react';
//import { TextField } from '@mui/material';
import {Link, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const { useState } = require("react");

const Instructor = () => {
  const t = localStorage.getItem('token');
  const decodedToken = jwt_decode(t);
  const id = decodedToken.id;
    const [courses, setCourses] = useState([]);
    const [Major, setSubjects] = useState([]);
    const [Price, setPrice] = useState([]);
    const [Username, setName] = useState([]);
    const [Title, setTitle] = useState([]);
    const [Major1, setMajor] = useState([]);

    const[myRating, setMyRating] = useState([]);
    const[myReview, setMyReview] = useState([]);

    // const [Title1, setTitle1] = useState([]);
    // const [Discount, setDiscount] = useState([]);
    // const [Rating,setRating] = useState([]);
    // const [Hours, setHours] = useState([]);
    // const [Price1, setPrice1] = useState([]);
    // const [Subtitle, setSubtitle1] = useState([]);
    // const [Subtitle2, setSubtitle2] = useState([]);
    // const [Subtitle3, setSubtitle3] = useState([]);
    // const [Subtitle4, setSubtitle4] = useState([]);
    // const [ShortSummary, setShortSummary] = useState([]);
    // const [Major2, setMajor2] = useState([]);
    // const [Reviews, setReviewss] = useState([]);

    const [email, setEmail] = useState([]);
    const [biography, setBiography] = useState([]);
    const [courses1, setRatings] = useState([]);
    const [reviews, setReviews] = useState([]);

    const [salary, setSalary] = useState([]);

    const [enrolled, setTotal] = useState([]);

    
    
   
    // console.log(userId);
    

    //const params = new URLSearchParams(window.location.search);
   // const MajorId = params.get('Major');
    // console.log(MajorId);
    

    /*const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    console.log(userId);
    */
     
    
        const viewCourses =  async () => {
            // await axios.get(`http://localhost:4000/viewcourses/${id}`).then(
              await axios.get(`http://localhost:4000/viewcourses/${id}`).then(
            (res) => { 
                const courses = res.data.Courses
               
                setCourses(courses)
                console.log(courses)
           
                
            }
             );
        }

        // const filterbySubject = async () =>{
        //     await axios.get(`http://localhost:4000/filtercourse/637f4bc36842923319c00e92?Major=${MajorId}`).then(
        //     (res) => { 
        //         const Major = res.data
        //         console.log(Major)
        //         setSubjects(Major)
                
        //     }
        //      );
        // }

        const filterbySubject = async () =>{
          await axios.get(`http://localhost:4000/filtercourse/${id}?Major=${Major}`).then(
           (res) => { 
               const Major = res.data
              
               console.log(Major)
              setSubjects(Major)
             

           }
            );
       }

       const filterbyPrice = async () =>{
        await axios.get(`http://localhost:4000/filtercoursebyprice/${id}?Price=${Price}`).then(
         (res) => { 
             const Price = res.data
             console.log(Price)
            setPrice(Price)

         }
          );
     }

     const searchByName = async () =>{
      await axios.get(`http://localhost:4000/searchcourseName/${id}?Name=${Username}`).then(
       (res) => { 
           const Username = res.data
           console.log(Username)
          setName(Username)

       }
        );
   }

   const searchByTitle= async () =>{
    await axios.get(`http://localhost:4000/searchcourseSubjectandTitle/${id}?Title=${Title}&Major=${Major1}`).then(
     (res) => { 
         const Title = res.data
         console.log(Title)
         setTitle(Title)
        //  setMajor(Major1);

     }
      );
 }

//  const handleChange = (e) => {
//   setTitle1(e.target.Title1);
//   setDiscount(e.target.Discount);
//   setRating(e.target.Rating);
//   setHours(e.target.Hours);
//   setPrice1(e.target.Price1);
//   setSubtitle1(e.target.Subtitle);
//   setSubtitle2(e.target.Subtitle2);
//   setSubtitle3(e.target.Subtitle3);
//   setSubtitle4(e.target.Subtitle4);
//   setShortSummary(e.target.ShortSummary);
//   setMajor2(e.target.Major2);
  

// };

// let axiosConfig = {
//   headers: {
//       'Content-Type': 'application/json',
//       "Access-Control-Allow-Origin": "*",
      
//   }
// };


//  const createCourse= async () =>{
//   await axios.post(`http://localhost:4000/createcourse/${id}`,{Title:Title1 , Discount: Discount , Rating:Rating,
// Hours:Hours,Price:Price1 , Subtitle:[Subtitle,Subtitle2,Subtitle3,Subtitle4],ShortSummary:ShortSummary,Major:Major2}).then(
//    (res) => { 
       
//        console.log(Title1)
    
//       //  console.log(Discount)
 
//       //  console.log(Rating)
   
//       //  console.log(Hours)
 
//       //  console.log(Price1)
      
//       //  console.log(Subtitle)
    
//       //  console.log(Subtitle2)
    
//       //  console.log(Subtitle3)
       
//       //  console.log(Subtitle4)
      
//       //  console.log(ShortSummary)
   
//       //  console.log(Major2)
//        console.log(res.data)

//    }
//     );
// }

const editEmail = async () =>{
  await axios.post(`http://localhost:4000/editEmail/${id}?Email=${email}`).then(
   (res) => { 
      //  const Email = res.data
      //  console.log(Email)
      //  setEmail(Email)
      console.log(res.data)
   }
    );
}

const editBiography = async () =>{
await axios.post(`http://localhost:4000/editBiography/${id}?Biography=${biography}`).then(
 (res) => { 
    //  const Biography = res.data
    //  console.log(Biography)
    //  setBiography(Biography)

    console.log(res.data)

 }
  );
}



 const viewRatings =  async () => {
  // await axios.get(http://localhost:4000/viewcourses/${id}).then(
    await axios.get(`http://localhost:4000/viewRatings/${id}`).then(
      (res) => { 
      const courses = res.data.Courses
      setRatings(courses)
      console.log(courses)
  }
   );
}

const viewReviews =  async () => {
  // await axios.get(http://localhost:4000/viewcourses/${id}).then(
    await axios.get(`http://localhost:4000/viewReviews/${id}`).then(
      (res) => { 
      const reviews = res.data.Courses
      setReviews(reviews)
      console.log(reviews)
  }
   );
}



const sendMessage = () => {
alert('Email updated successfully');
}

const sendMessage2 = () => {
alert('Biography updated successfully');
}



//  const searchBySubject= async () =>{
//   await axios.get(`http://localhost:4000/searchcourseSubjectandTitle/637f4bc36842923319c00e92?Major=${Major1}`).then(
//    (res) => { 
//        const Major1 = res.data
//        console.log(Major1)
//        setMajor(Major1)

//    }
//     );
// }

const viewMyRatings =  async () => {
  // await axios.get(http://localhost:4000/viewcourses/${id}).then(
    await axios.get(`http://localhost:4000/viewMyRatings/${id}`).then(
      (res) => { 
      const ratings = res.data.Rating
      setMyRating(ratings)
      console.log(ratings)
  }
   );
}

const viewMyReviews =  async () => {
// await axios.get(http://localhost:4000/viewcourses/${id}).then(
  await axios.get(`http://localhost:4000/viewMyReviews/${id}`).then(
    (res) => { 
    const reviews = res.data.Reviews
    setMyReview(reviews)
    console.log(reviews)
}
 );
}

const viewMySalary =  async () => {
  // await axios.get(http://localhost:4000/viewcourses/$%7Bid%7D).then(
    await axios.get(`http://localhost:4000/viewMySalary/${id}`).then(
      (res) => { 
      const salary = res.data.NetProfit
      setSalary(salary)
      console.log(salary)
  }
   );
}

const viewTotalEnrolled =  async () => {
  // await axios.get(http://localhost:4000/viewcourses/$%7Bid%7D).then(
    await axios.get(`http://localhost:4000/viewTotalEnrolled/${id}`).then(
      (res) => { 
      const enrolled = res.data.TotalEnrolled
      setTotal(enrolled)
      console.log(enrolled)
  }
   );
}
       
const navigate = useNavigate();

    
     return(
    <div className="Instructor">
            
            <Button variant="contained"
            onClick={viewCourses}
            margin="normal"
            padding="normal"
            style={{marginTop:"70px"}}
            >View Courses</Button>
            <br></br>
            <br></br>
            {courses.map((course, index) => (
            <div key={index}>
              <ul style={{listStyleType:"none"}}type="disc">
                  <h6><strong>Course name: </strong></h6>
                  <li>{course}</li>
              </ul>
            </div> 
            ))}
            <hr></hr>
      <form className='filterSubject'>
              <h5>Filter By Subject</h5>
              <input 
              type="text" 
              value={Major}
              onChange={(e) => setSubjects(e.target.value)}
              />
              <br></br>
              <br></br>
              <Button  variant="contained"
                onClick={filterbySubject}
                margin="normal"
                padding="normal"
                className="btn btn-primary"
              >Enter Subject</Button>
        </form>
        <hr></hr>
        {Array.from(Major).map((major,index1) => (
            <div key={index1}>
          
          <ul type="disc">
                    <li>id: {major._id}</li>
                    <li>Title: {major.Title}</li>
                    <li>Discount: {major.Discount}</li>
                    <li>Major: {major.Major}</li>
                    <li>Price: {major.Price}</li>
                    <li>Rating: {major.Rating}</li>
                    <li>ShortSummary: {major.ShortSummary}</li>
                    <li>Subtitle: {major.Subtitles}</li>
          </ul>
                   {/* {course} */}
        </div> 
	       ))}
             
             <form className='filterPrice'>
                <h5>Filter By Price</h5>
                <input 
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                value={Price}
              />
              <br></br>
              <br></br>
              <Button variant="contained"
                onClick={filterbyPrice}
                margin="normal"
                padding="normal"
              >Enter Price</Button>
            </form>
            <hr></hr>
            {Array.from(Price).map((course,index2) => (
                <div key={index2}>
                  <ul type="disc">
                    <li>id: {course._id}</li>
                    <li>Title: {course.Title}</li>
                    <li>Discount: {course.Discount}</li>
                    <li>Major: {course.Major}</li>
                    <li>Price: {course.Price}</li>
                    <li>Rating: {course.Rating}</li>
                    <li>ShortSummary: {course.ShortSummary}</li>
                    <li>Subtitle: {course.Subtitles}</li>
          </ul>
                </div> 
                ))} 

            
              <form className='SearchByName'>
                <h5>Search By Name</h5>
                <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={Username}
              />
              <br></br>
              <br></br>
              <Button  variant="contained"
                onClick={searchByName}
                margin="normal"
                padding="normal"
              >Enter Name</Button>
              <br></br>
              <br></br>
            </form>
            <hr></hr>
            {Array.from(Username).map((course,index3) => (
                <div key={index3}>
                 <ul type="disc">
                    <li>id: {course._id}</li>
                    <li>Title: {course.Title}</li>
                    <li>Discount: {course.Discount}</li>
                    <li>Major: {course.Major}</li>
                    <li>Price: {course.Price}</li>
                    <li>Rating: {course.Rating}</li>
                    <li>ShortSummary: {course.ShortSummary}</li>
                    <li>Subtitle: {course.Subtitles}</li>
          </ul>
                </div> 
                ))} 

<form className='SearchByTitleOrSubject'>
                <h5>Search By Title or Subject</h5>
                <input 
                type="text"
                placeholder='Enter Title'
                onChange={(e) => setTitle(e.target.value)}
                value={Title}
              />
              <br></br>
              <br></br>
              <form className='SearchByTitleOrSubject'>
                {/* <h2>Search By Subject</h2> */}
                <input
                placeholder='Enter Subject'
                type="text"
                onChange={(e) => setMajor(e.target.value)}
                value={Major1}
              />
              <br></br>
              <br></br>
              <Button  variant="contained"
                onClick={searchByTitle}
                margin="normal"
                padding="normal"
              >Enter Title or subject</Button>
            </form>
            <hr></hr>
            {Array.from(Title).map((course,index4) => (
                <div key={index4}>
               <ul type="disc">
                    <li>id: {course._id}</li>
                    <li>Title: {course.Title}</li>
                    <li>Discount: {course.Discount}</li>
                    <li>Major: {course.Major}</li>
                    <li>Price: {course.Price}</li>
                    <li>Rating: {course.Rating}</li>
                    <li>ShortSummary: {course.ShortSummary}</li>
                    <li>Subtitle: {course.Subtitles}</li>
          </ul>
                </div> 
                ))} 

            {/* {Array.from(Title).map((course,index5) => (
                <div key={index5}>
                 <ul type="disc">
                    <li>id: {course._id}</li>
                    <li>Title: {course.Title}</li>
                    <li>Discount: {course.Discount}</li>
                    <li>Major: {course.Major}</li>
                    <li>Price: {course.Price}</li>
                    <li>Rating: {course.Rating}</li>
                    <li>ShortSummary: {course.ShortSummary}</li>
                    <li>Subtitle: {course.Subtitle}</li>
          </ul>
                </div> 
                ))} */}
            </form>
            
            <form className='setEmail'>
                {/* <h2>Search By Subject</h2> */}
                <input
                placeholder='Enter Email'
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br></br>
              <br></br>
              <Button  variant="contained"
                onClick={() =>{
                  editEmail();
                  sendMessage();
                }}
                margin="normal"
                padding="normal"
              >Enter Email</Button>
              </form>
              <hr></hr>

              <form className='setBiography'>
                <input
                placeholder='Enter Biography'
                type="text"
                onChange={(e) => setBiography(e.target.value)}
                value={biography}
              />
              <br></br>
              <br></br>
              <Button  variant="contained"
                onClick={() =>{
                  editBiography();
                  sendMessage2();
                }}
                margin="normal"
                padding="normal"
              >Enter Biography</Button>
              </form>
              <hr></hr>
              <Button variant="contained"
                onClick={viewRatings}
                margin="normal"
                padding="normal"
              >View Ratings</Button>
              <br></br>
              <br></br>
              {Array.from(courses1).map((course,index9) => (
                <div key={index9}>
                <ul style={{listStyleType:"none"}} type="disc">
                    <li><strong>Rating: </strong>{course}</li>
                    
          </ul>
                </div> 
                ))}
              <div>
                <Button variant="contained"
                onClick={viewReviews}
                margin="normal"
                padding="normal"
              >View Reviews</Button>
              <br></br>
              <br></br>
              {reviews.map((review,index10) => (
                <div key={index10}>
                <ul style={{listStyleType:"none"}} type="disc">
                    <li><strong>Review: </strong>{review}</li>
                    
          </ul>
                </div> 
                ))}
          </div>
          <Button variant="contained" margin="normal"
                padding="normal" onClick={() => navigate('/InstructorCourse')}>Create a Course</Button>
              <br></br>
              <br></br>

            <div className='MyRating'>
              <Button variant="contained"
                onClick={viewMyRatings}
                margin="normal"
                padding="normal"
              >View My Ratings</Button>
              <br></br>
              <br></br>
                {Array.from(myRating).map((instructor,index11) => (
                <div key={index11}>
                  <ul style={{listStyleType:"none"}}type="disc">
                <li><h6><strong>Rating: </strong></h6>{instructor}</li>
                </ul>
                </div> 
                ))} 
                </div>


                <div className='MyReview'>
              <Button variant="contained"
                onClick={viewMyReviews}
                margin="normal"
                padding="normal"
                // style={{marginBottom:"70px"}}
              >View my reviews</Button> 
                <br></br>
               <br></br>
                {Array.from(myReview).map((instructor,index12) => (
                <div key={index12}>
                  <ul style={{listStyleType:"none"}} type="disc">
                <li>{instructor}</li>
                </ul>
                </div> 
                ))} 
                </div>
                
              <div className='MySalary'>
              <Button  variant="contained"
              onClick={viewMySalary}
              margin="normal"
              padding="normal"
              >View My Salary</Button>
              <br></br>
              <br></br>
              {salary.map((item,index) => (
                <div key={index}>
                  <ul style={{listStyleType:"none"}} type="disc">
                    <li><strong>Net profit: </strong>{item}</li>
                  </ul>
                </div> 
                ))} 

                </div>

                <div className='MyTotal'>
                <Button  variant="contained"
                onClick={viewTotalEnrolled}
                margin="normal"
                padding="normal"
                >View Total Enrolled</Button>
                <br></br>
                <br></br>
                {enrolled.map((item,index) => (
                <div key={index}>
                   <ul style={{listStyleType:"none"}} type="disc">
                <li><strong>Total enrolled students: </strong>{item}</li>
                </ul>
                </div> 
                ))}
                </div>


                <div>
                <Link to="/createquiz"  variant="contained"
                margin="normal"
                padding="normal"
                >Create quiz</Link>
                <br></br>
                <br></br>
                
                 

                </div>
    </div>
    )
}

export default Instructor;
