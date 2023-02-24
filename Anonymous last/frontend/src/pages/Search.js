
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseDetails from "../components/CourseDetails";
const Search = ({ result, searchKey, filter,setId,type,country,countryCode,setCountryCode }) => {
    console.log("henaoo")

    result=result[0].Course;
   const [theFlag,setTheFlag]=useState(false);
    useEffect(() => {
        setTheFlag(false);
    }
    );

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
                                <CourseDetails res={res} index={index} setId={setId} type={type} country={country} countryCode={countryCode} theFlag={theFlag} setTheFlag={setTheFlag}/>
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
export default Search