import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
// import Posts from "./Posts"
import About from "../pages/About"
// import PostInfo from"./PostInfo"
// import Edit from "./Edit"
// import Create from "./Create"
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
import PasswordReset  from "./emailPage";
import PasswordForget from "./forgetPs"
import RateCourse from "./RateCourse"
import InstructorRating from "./RateInstructor"
import Notes from "./Notes"
import DropDownCountry from "./DropDownCountry"
import CorporateTraineeReportedProblems from "../pages/CorporateTraineeReportedProblems"
import jwt_decode from "jwt-decode";
const NavbarCorporateTrainee = ({myid,setGuest}) => {
  const t1 = localStorage.getItem('token');
    const decodedToken1 = jwt_decode(t1);
    const id1 = decodedToken1.id;
  //only one element in return
  const type="Corporate Trainee";
  const [searchKey, setSearchKey] = useState('');
  const [result, setResult] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [filter, setFilter] = useState('Title');
  const [id, setId] = useState(null);
  const [country, setCountry] = useState('Egypt');
  const [countryCode, setCountryCode] = useState('EGP');
  console.log(filter);
  const logout=()=>{
    setGuest(0);
    localStorage.removeItem('token');
    localStorage.removeItem('type')
    //code todelete token
  }
  const dataIndivid = async (myid) => {
    console.log("the", myid);
    await fetch('/getcorporateTraineeCourses/' + myid)
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
                  <Link to="/" className="nav-link active" >Home</Link>
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
                <li className="nav-item">
                  <Link to="/mycourses" className="nav-link" on onClick={() => { dataIndivid(id1) }} >MyCourses</Link>
                </li>
                <li className="nav-item">
                <form className="d-flex1" role="Drop">
                <DropDownCountry setCountry={setCountry} country={country} countryCode={countryCode} setCountryCode={setCountryCode}  />
              </form>
                </li>
                <li className="nav-item">
                  <Link to="/corporateTraineeRP" className="nav-link" >Report a problem</Link>
                </li>
                <li className="nav-item">
                  <Link  to="/"className="nav-link" onClick={()=>{logout()}} >Logout</Link>
                </li>
              </ul>
              <form className="d-flex" role="search" style={{marginRight:"15px"}}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setSearchKey(e.target.value) }} />
                <Link to="/search" className="btn btn-primary" >Search</Link>
              </form>
              <form className="d-flex1" role="Drop">
                <DropDown setFilter={setFilter} filter={filter} />
              </form>
            </div>
          </div>
        </nav>
        <Routes>
        <Route path="/notes" element={<Notes/>}/>
          <Route path="/" element={<Home x={PasswordReset} y={PasswordForget} type={type} z="2"/>}> </Route>
          {/* <Route path="/posts" element={<Posts />}></Route> */}
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/posts/:id" element={<PostInfo />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/create" element={<Create /> }></Route> */}
          <Route path="/search" element={<Search result={result} searchKey={searchKey} filter={filter} setId={setId} type={type}/>}></Route>
          <Route path="/course" element={<Course id={id} type={type}/>}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/contract" element={<Contract />}></Route>
          <Route path="/quiz"
            element={<Quiz />} />
          <Route path="/mycourses" element={<MyCourses result={result} searchKey={searchKey} filter={filter} setId={setId} type={type}/>}></Route>
          <Route path="/mycourse" element={<MyCourse id={id} type={type} />}></Route>
          <Route path="/sheet" element={<Sheet  />}></Route>
          <Route path="/P" element={<PasswordReset  z="2"/>} />
            
            <Route path="/F" element={<PasswordForget z="2"/>} />
            <Route path="/ratecourse"
            element={<RateCourse id={id}/>}/>

            <Route path="/rateinstructor"
            element={<InstructorRating/>}/>
                       <Route path="/rateinstructor"
            element={<Notes/>}/>

        <Route path="/corporateTraineeRP" element={<CorporateTraineeReportedProblems />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default NavbarCorporateTrainee