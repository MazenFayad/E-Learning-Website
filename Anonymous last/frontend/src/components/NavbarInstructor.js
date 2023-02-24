import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Search from "../pages/Search"
import { useEffect, useState } from "react"
import DropDown from "./DropDown"
import Course from "../pages/Course"
import Notifications from "../pages/Notifications"
import Contract from "../pages/Contract"
import Quiz from "./Quiz"
import MyCourses from "../pages/MyCourses"
import MyCourse from "../pages/MyCourse"
import Sheet from "../pages/Sheet"
import PasswordReset from "./emailPage";
import PasswordForget from "./forgetPs"
import InstructorCourse from '../pages/InstructorCourse';
import InstructorReportedProblem from "../pages/InstructorReportedProblem"
import PreviewCourse from '../pages/PreviewCourse';
import Instructor from '../pages/Instructor';
import jwt_decode from "jwt-decode";
import Policiy from "../pages/Policiy"
import CreateQuiz from "../pages/CreateQuiz"
const NavbarInstructor = ({myid,setGuest}) => {
  //only one element in return
  const t = localStorage.getItem('token');
  const decodedToken = jwt_decode(t);
  const idd = decodedToken.id;
  console.log("sanoda",idd);
  const type = "Instructor";
  const [searchKey, setSearchKey] = useState('');
  const [result, setResult] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [filter, setFilter] = useState('Title');
  const [id, setId] = useState(null);
  console.log(filter);
  const logout=()=>{
    setGuest(0);
    localStorage.removeItem('token')
    //code todelete token
  }
  const dataIndivid = async (myid) => {
    console.log("the", myid);
    await fetch('/getindividualTraineeCourses/' + myid)
      .then((response) => {
        console.log(response.ok);
        if (!response.ok)
          throw Error("Can not Connect!!!!")
        return response.json()
      })
      .then((data) => {
        setResult(data);


      }).catch((e) => {
        console.log(e.message)
      });



  }

  useEffect(() => {
    setIsWaiting(true);
    const fetchdata = async () => {

      //   fetch('https://jsonplaceholder.typicode.com/posts', {
      //     method: 'POST',
      //     body: JSON.stringify(mypost),
      //     headers: {
      //         'Content-type': 'application/json; charset=UTF-8',
      //     },
      // })
      //     
      //   


      await fetch('/getCourses?filter=' + filter + "&k=" + searchKey)
        .then((response) => {
          console.log(response.ok);
          if (!response.ok)
            throw Error("Can not Connect!!!!")
          return response.json()
        })
        .then((data) => {

          setResult(data);
          setIsWaiting(false);

        }).catch((e) => {
          console.log(e.message)
        });



    }

    fetchdata();

  }, [filter, searchKey])
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><strong><span style={{color:"blue"}}>A</span></strong>nonymous</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" >Home </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/posts" className="nav-link" >Posts</Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link" >Create</Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/search" className="nav-link" >Search</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" >About</Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/mycourses" className="nav-link" on onClick={() => { dataIndivid("635ff7a6c45d7eec9ab2eb49") }} >MyCourses</Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/Instructor" className="nav-link" >Profile</Link>
                </li>
                <li className="nav-item">
                  <Link to="/notifications" className="nav-link" >Notifications</Link>
                </li>
                <li className="nav-item">
                  <Link to="/instructorRP" className="nav-link" >Report a problem</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={()=>{logout()}} >Logout</Link>
                </li>
              </ul>
              <form className="d-flex" role="search" style={{marginRight:"15px"}}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setSearchKey(e.target.value) }} />
                <Link to="/search" className="btn btn-primary" >Search</Link>
              </form>
              <form className="d-flex1" role="Drop" style={{backgroundColor:"#0466c8" , borderRadius:'20px'}}> 
                <DropDown setFilter={setFilter} filter={filter} />
              </form>
            </div>
          </div>
        </nav>
        {/* <div className="policy" style={{marginTop:'100px'}}>
          <pre>By clicking "Sign up", You agree to our <Link to="/Policiy" style={{textDecoration:'none'}} >Terms and Conditions</Link> and <Link to="/Policiy" style={{textDecoration:'none'}}>Refund Policy</Link></pre>
        </div> */}
        <Routes>
          <Route path="/" element={<Home x={PasswordReset} y={PasswordForget} type={type} />}> </Route>
          {/* <Route path="/posts" element={<Posts />}></Route> */}
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/posts/:id" element={<PostInfo />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/create" element={<Create /> }></Route> */}
          <Route path="/search" element={<Search result={result} searchKey={searchKey} filter={filter} setId={setId} />}></Route>
          <Route path="/course" element={<Course id={id} />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/contract" element={<Contract />}></Route>
          <Route path="/quiz"
            element={<Quiz />} />
          <Route path="/mycourses" element={<MyCourses result={result} searchKey={searchKey} filter={filter} setId={setId} />}></Route>
          <Route path="/mycourse" element={<MyCourse id={id} />}></Route>
          <Route path="/sheet" element={<Sheet />}></Route>
          <Route path="/P" element={<PasswordReset />} />

          <Route path="/F" element={<PasswordForget />} />
          <Route
            path="/Instructor"
            element={<Instructor setFilter={setFilter} setSearchKey={setSearchKey} />} />
          <Route path="/InstructorCourse" element={<InstructorCourse />} />
          <Route path="/PreviewCourse" element={<PreviewCourse />} />
          <Route path="/instructorRP" element={<InstructorReportedProblem/>} />
          <Route path="/policiy" element={<Policiy/>}></Route>
          <Route path="/createquiz" element={<CreateQuiz/>}></Route>
        </Routes>

      </BrowserRouter>
          {/* View policy button */}

    </div>
  )
}
export default NavbarInstructor