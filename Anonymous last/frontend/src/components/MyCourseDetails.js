import { Link, useNavigate } from "react-router-dom";


const MyCourseDetails = ({ res,setId,type }) => {
    
    const navigate=useNavigate();

    return (
            <div className="container" style={{marginRight:"400px"}}>
                <p ><strong>Title: </strong>{res.Title}</p>
                <p><strong>Major: </strong>{res.Major}</p>
                <p style={{marginRight:"15px"}}><strong>Hours: </strong>{res.Hours}</p>
                <p><strong>Rating: </strong>{res.Rating}</p>
                {type!="Corporate Trainee"&&(<p><strong>Price: </strong>{res.Price}</p>)}
                {res.username&&<p><strong>Instructors:{res.username.map((user)=>(<p>{user}</p>))}</strong></p>}
                <Link to='/mycourse' className="btn btn-primary me-3" onClick={()=>{setId(res._id)}} >MoreInfo</Link> 
                <Link to='/ratecourse' className="btn btn-primary" onClick={()=>{setId(res._id)}} >RateCourse</Link>
                <hr/>
            </div>
    );


}
export default MyCourseDetails





















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