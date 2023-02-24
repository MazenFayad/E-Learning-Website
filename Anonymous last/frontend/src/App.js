

import Navbar from './components/NavbarIndividualTrainee';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import RateCourse from './components/RateCourse';
import InstructorRating from './components/RateInstructor';
import NavbarGuest from './components/NavbarGuest';

import Edit from './pages/Edit';
import NavbarInstructor from './components/NavbarInstructor';
import NavbarCorporateTrainee from './components/NavbarCorporateTrainee';
import NavbarIndividualTrainee from './components/NavbarIndividualTrainee';
import NavbarAdmin from './components/NavbarAdmin';

function App() {
  const [guest, setGuest] = useState(0);
  const [myid,Setmyid]=useState(null);
  const t = localStorage.getItem('token');
  const type=localStorage.getItem('type');

  return (
    <div className="App">
       {(!t)&&(<NavbarGuest setGuest={setGuest} Setmyid={Setmyid}/> )}
       {t&&type=="Instructor"&&(<NavbarInstructor myid={myid} setGuest={setGuest} /> )}
       {t&&type=="Corporate Trainee"&&(<NavbarCorporateTrainee myid={myid} setGuest={setGuest}/> )}
       {t&&type=="Individual Trainee"&&(<NavbarIndividualTrainee myid={myid} setGuest={setGuest} /> )}
       {t&&type=="Admin"&&(<NavbarAdmin myid={myid} setGuest={setGuest} /> )}
       {/* <Edit/> */}
      { 
      <BrowserRouter>
        <Routes>
            <Route path="/ratecourse"
            element={<RateCourse/>}/>
            <Route path="/rateinstructor"
            element={<InstructorRating/>}/>
        </Routes>
      </BrowserRouter> 
      }
    </div>
  );
}

export default App;
// function App() {
//   return (
//     <div className="container">
//       <Navbar />  

//     </div>
//   );
// }

// export default App;
