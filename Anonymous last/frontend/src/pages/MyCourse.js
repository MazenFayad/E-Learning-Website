import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notes from "../components/Notes";
import axios from "axios"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import jwt_decode from "jwt-decode";
import FileDownload from "js-file-download";
import Button from '@mui/material/Button';

const MyCourse = ({ id ,type}) => {
    const t1 = localStorage.getItem('token');
    const decodedToken1 = jwt_decode(t1);
    const id1 = decodedToken1.id;
    const [res, setRes] = useState(null);
    const [progress, setProgress] = useState([]);
    const [individualprogress, setIndivdiualProgress] = useState([]);

    const newPrice = (Price, Discount) => {
        return (Price - (Discount / 100) * Price)
    }
    const GetCorporateProgress= async () =>{
        await axios.get(`http://localhost:4000/GetCorporateProgress/${id1}`)
        .then(
         (res) => { 

           const progress= res.data
            //console.log(R);
            setProgress(progress)
          //console.log(res.data)
      }
      );
      }

      const GetIndividualProgress= async () =>{
        await axios.get(`http://localhost:4000/GetIndividualProgress/${id1}`)
        .then(
         (res) => { 

           const individualprogress= res.data
            //console.log(R);
            setIndivdiualProgress(individualprogress)
          //console.log(res.data)
      }
      );
      }
    const t = localStorage.getItem('token');
    const decodedToken = jwt_decode(t);
    const myid = decodedToken.id;
    console.log("hena",id);
    const download =(e) => {
        e.preventDefault();
        axios({
            url:"http://localhost:4000",
            method:"GET",
            responseType:"blob"
        }).then((res) => {
            console.log(res);
            FileDownload(res.data,"Certificate.txt");
        })
    }
    const refund=async()=>{
        alert("Refund Requested successfully")
        console.log(myid);
        console.log(id);
        console.log("request refund sent successfully");
        await axios.post("/reqrefund", {
            myid,
            id,
        })
        .then((response) => {
            console.log(response.ok);
            if(response.data.message === "request sent successfully")
            {
                
                return toast.error(response.data.message)
            }
            if (!response.ok)
            return toast.error("something went wrong,we are working to fix please try again later");
            return response.json()
        })
        .catch((e) => {
            console.log(e.message)
        });

    }
    useEffect(() => {
        const fetchdata = async () => {
            console.log("the", id);
            await fetch('/getCourse/' + id)
                .then((response) => {
                    console.log(response.ok);
                    if (!response.ok)
                        throw Error("Can not Connect!!!!")
                    return response.json()
                })
                .then((data) => {
                    setRes(data);


                }).catch((e) => {
                    console.log(e.message)
                });



        }
        fetchdata();
        GetCorporateProgress();
        GetIndividualProgress();
    }
        , [])

    return (
        <div className="container" key={1}>
            {res && (<div>
                <strong></strong><br />
                <p ><strong>Title: </strong>{res.Title}</p>
                <p><strong>Major: </strong>{res.Major}</p>
                <p><strong>Hours: </strong>{res.Hours}</p>
                <p><strong>Rating: </strong>{res.Rating}</p>
                
                {type=="Corporate Trainee"&& <p><strong>Progress: </strong>{progress}</p>}

                {type!="Corporate Trainee"&&(<p><strong>Price:</strong>{res.Price}</p>&&<p><strong>Progress: </strong>{individualprogress}</p>)}
                {res.Subtitle && (res.Subtitle.map((ress, index) => (
                    <div>

                        {ress.name && (<div><p><strong>Subtitle#{index + 1}:</strong></p><br /> <pre><strong>   Name:</strong>{ress.name}</pre> </div>)}
                        {ress.Hour && (<div> <pre><strong>   Hours:</strong>{ress.Hour}</pre> <br /></div>)}
                    </div>

                )
                )


                )}
                {(type!="Corporate Trainee")&&(res.Discount) && (
                    <div>
                        <p><strong>Discount:</strong>{res.Discount}%</p>
                        {res.Price && (<p><strong>New Price After Discount:</strong>{
                            newPrice(res.Price, res.Discount)
                        }</p>)}
                    </div>
                )

                }
                <Link to='/quiz' className="btn btn-primary" >Take Exam</Link>
                <br></br>
                <br></br>
                <Link to='/myCourse' className="btn btn-primary" on onClick={()=>{refund()}}>Request a Refund</Link>
                <br></br>
                <br></br>
                <div>
                    <button onClick={(e)=>download(e)} className="btn btn-primary">Download Your Certificate</button>
                </div>
                <h1>Video1:</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ou-7AboPoXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h1>Video2:</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/v0GF5QiaTpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div>
                <Notes/>
                </div>
                <br></br>
                <p>Exercises:<Link to='/sheet' className="btn btn-primary" >sheet1</Link> <Link to='/sheet' className="btn btn-primary" >sheet2</Link></p>  
                <hr />
            </div>
            )}
        </div>
    );


}
export default MyCourse