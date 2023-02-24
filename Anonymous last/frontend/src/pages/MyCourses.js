
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyCourseDetails from "../components/MyCourseDetails";
const MyCourses = ({ result, searchKey, filter,setId,type,dataIndivid }) => {
    console.log("henaoo")
    dataIndivid();
    result=result[0].Course

    return (
        <div className="container">
            <h1>Searching by {filter}</h1>
            <br />
            {/* <input placeholder="enter search" onChange={(e)=>{setSearchKey(e.target.value)}}/> */}
            {result &&
                (
                    result
                        // .
                        // filter((res)=>{
                        //     if(searchKey===''){
                        //     return res;
                        //     }
                        //     else if(res.Filter.toLowerCase().includes(searchKey.toLowerCase())){
                        //         return res;
                        //     }
                        // })
                        .map((res, index) => (
                            <div key={index}>                              
                                <MyCourseDetails res={res} index={index} setId={setId} type={type}  />
                            </div>

                            // <CourseDetails res={rest} index={index}/>
                            // <div className="container" >
                            //     <strong>#{index+1}</strong><br/>
                            //     <p >Title:{res.Title}</p>
                            //     <p>Hours:{res.Hours}</p>
                            //     <p>Rating:{res.Rating}</p>
                            //     <hr/>
                            //     </div>
                        ))
                )}
                
                



        </div>

    );




}
export default MyCourses