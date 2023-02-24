import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const CourseDetails = ({ res,setId,type,country,countryCode,setCountryCode,theFlag,setTheFlag }) => {
    
    const navigate=useNavigate();
    console.log("valueeee",res.Price);
    
    useEffect(() => {
      if(theFlag==false)
        fetchdata();
    }
)
    const [z, setZ] = useState(null);
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
          if(res.Price=="FREE"){
            setZ("FREE");
          }
          else{
          await fetch('/currency?price=' + res.Price + "&countryCode=" + countryCode)
        .then((response) => {
          console.log(response.ok);
          if (!response.ok)
            throw Error("Can not Connect!!!!")
          return response.json()
        })
        .then((data) => {

          setZ(data);

        }).catch((e) => {
          console.log(e.message)
        });
    
        //   let exchange = await fetchJson('https://openexchangerates.org/api/latest.json?app_id=1e349a805183447695ff40e9257ce1b1')
        //     .then((response) => {
        //       console.log(response.ok);
        //       if (!response.ok)
        //         throw Error("Can not Connect!!!!")
        //       return response.json()
        //     })
        //     .then((data) => {
        //         fx.base = data.base;
        //         fx.rates = data.rates;
        //         res.Price = fx(res.Price).from('USD').to(location.currency.code).toFixed(2) + '' + location.currency.symbol;
        //       setResult(data);
        //       setIsWaiting(false);
    
        //     }).catch((e) => {
        //       console.log(e.message)
        //     });
    
    
          }
        }

    
    return (

        <div >
     {/* { theFlag==false&&(<div>
        <p ><strong >Title:</strong>{res.Title}</p>
        <p><strong>Major:</strong>{res.Major}</p>
        <p><strong>Hours:</strong>{res.Hours}</p>
        <p><strong>Rating:</strong>{res.Rating}</p>
        {type!="Corporate Trainee"&&z&&(<p><strong>Price:</strong>{z} </p>)}
        {type!="Corporate Trainee"&&!z&&(<p><strong>Price:</strong>loading.. </p>)}
        {res.username&&<p><strong>Instructors:{res.username.map((user)=>(<p>{user}</p>))}</strong></p>}
        <Link to='/course' className="btn btn-primary" onClick={()=>{setId(res._id);setTheFlag(true)}} >MoreInfo</Link>    
        <hr/></div>)
} */}

<div class="card">
  <div class="card-body">

{ theFlag==false&&(<div>
  <p class="text-left"><strong >Title:</strong>{res.Title}</p>
  <p class="card-text"><strong>Major:</strong>{res.Major}</p>
  <p class="card-text"><strong>Hours:</strong>{res.Hours}</p>
  <p class="card-text"><strong>Rating:</strong>{res.Rating}</p>
  {type!="Corporate Trainee"&&z&&(<p class="card-text"><strong>Price:</strong>{z} </p>)}
  {type!="Corporate Trainee"&&!z&&(<p class="card-text"><strong>Price:</strong>loading.. </p>)}
  {res.username&&<p class="card-text"><strong>Instructors:{res.username.map((user)=>(<p class="card-text">{user}</p>))}</strong></p>}
  <Link to='/course' className="btn btn-primary" onClick={()=>{setId(res._id);setTheFlag(true)}} >MoreInfo</Link>    
  </div>)
}
      </div>
    </div>
    <br/>
 </div>
    
    );


}
export default CourseDetails





















// import { useNavigate } from "react-router-dom";
// const CourseDetails = ({ res,index,x }) => {
    
//     const navigate=useNavigate();

//     return (
//         <div className="container" key={index} onclick={()=>{useNavigate('course',{state:{id:{res.id}}})}}>
//         <strong>#{index+1}</strong><br/>
//         <p ><strong>Title:</strong>{res.Title}</p>
//         <p><strong>Major:</strong>{res.Major}</p>
//         <p><strong>Hours:</strong>{res.Hours}</p>
//         <p><strong>Rating:</strong>{res.Rating}</p>
//         <p><strong>Price:</strong>{res.Price}</p>
//        {x&&<p><strong>InstructorName:</strong>{x}</p>}
//         <hr/>
//         </div>
//     );


// }
// export default CourseDetails