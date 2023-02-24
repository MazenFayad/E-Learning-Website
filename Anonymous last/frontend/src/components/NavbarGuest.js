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
import Navbar from "./NavbarIndividualTrainee"
import DropDownCountry from "./DropDownCountry"
import Payment from "./Payment"
import Login from "./Login"
import Signup from "./Signup"
import jwt_decode from "jwt-decode";
import Ads from "./Ads"
import { SocialIcon } from 'react-social-icons'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import Policiy from "../pages/Policiy"

const NavbarGuest = ({setGuest,Setmyid}) => {

  const t = localStorage.getItem('token');
  if(t){
  const decodedToken = jwt_decode(t);
  const idd = decodedToken.id;
  
  console.log("theeeeeeeee",idd);
  }
  else{
    console.log("kolotmam");
  }
  const type="Guest";
  //only one element in return
  const [searchKey, setSearchKey] = useState('');
  const [result, setResult] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [filter, setFilter] = useState('Title');
  const [country, setCountry] = useState('Egypt');
  const [countryCode, setCountryCode] = useState('EGP');
  const [id, setId] = useState(null);
  console.log(filter);

  
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


      await fetch('/getCourses?filter=' + filter + "&k=" + searchKey+ "&c=" + countryCode)
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
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <h5><a className="navbar-brand" href="#"> <strong><span style={{color:"blue"}}>A</span></strong>nonymous</a></h5>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <h5><Link to="/" className="nav-link active">Home </Link></h5>
                </li>
                {/* <li className="nav-item">
                  <Link to="/posts" className="nav-link" >Posts</Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link" >Create</Link>
                </li> */}
                <li className="nav-item">
                  <h5><Link to="/search" className="nav-link" >Search</Link></h5>
                </li>
                <li className="nav-item">
                  <h5><Link to="/about" className="nav-link" >About</Link></h5>
                </li>
                {/* <li className="nav-item">
                  <Link  className="nav-link" onClick={()=>{setGuest(1)}} >Instructor</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" onClick={()=>{setGuest(2)}}>CorporateTrainee</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" onClick={()=>{setGuest(3)}}>IndividualTrainee</Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link to="/Payment" className="nav-link" >Payment</Link>
                </li> */}
                <h5>
                <li className="nav-item">
                <form className="d-flex1" role="Drop">
                <DropDownCountry setCountry={setCountry} country={country} countryCode={countryCode} setCountryCode={setCountryCode}  />
              </form>
                </li>
                </h5>
                <li className="nav-item">
                  <h5><Link to="/login" className="nav-link" >Login</Link></h5>
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

        <Routes>
          <Route path="/" element={<Home  type={type} />}> </Route>
          {/* <Route path="/posts" element={<Posts />}></Route> */}
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/posts/:id" element={<PostInfo />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/create" element={<Create /> }></Route> */}
          <Route path="/search" element={<Search result={result} searchKey={searchKey} filter={filter} setId={setId} country={country} countryCode={countryCode} setCountryCode={setCountryCode}/>}></Route>
          <Route path="/course" element={<Course id={id} />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/contract" element={<Contract />}></Route>
          <Route path="/quiz"
            element={<Quiz />} />
          <Route path="/mycourses" element={<MyCourses result={result} searchKey={searchKey} filter={filter} setId={setId} />}></Route>
          <Route path="/mycourse" element={<MyCourse id={id} />}></Route>
          <Route path="/sheet" element={<Sheet  />}></Route>
          <Route path="/P" element={<PasswordReset/>} />
            
            <Route path="/F" element={<PasswordForget/>} />
            <Route path="/navbar" element={<Navbar/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/login" element={<Login Setmyid={Setmyid} setGuest={setGuest}/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/policiy" element={<Policiy />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}
export default NavbarGuest