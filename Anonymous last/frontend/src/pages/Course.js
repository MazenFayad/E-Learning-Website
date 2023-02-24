import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  StripeCheckOut from "react-stripe-checkout"
import axios from "axios"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import jwt_decode from "jwt-decode";


const Course = ({ id, type }) => {
    const t1 = localStorage.getItem('token');
    var id1
    if(t1){
    const decodedToken1 = jwt_decode(t1);
     id1 = decodedToken1.id;
    }
    const [res, setRes] = useState(null);
    const newPrice = (Price, Discount) => {
        return (Price - (Discount / 100) * Price)
    }

    const sendMessage = () => {
        alert('Request sent successfully');
      }

    const RequestAccess = async () =>{
        await axios.post(`http://localhost:4000/Requestaccess/${id1}/${id}`)
        .then(
         (res) => { 

           // const Requests = res.data
            // console.log(R);
            // setRequest(Requests)
          console.log(res.data)
          alert("Access to this course requested successfuly!")
          feedbackRequest();
      }
      );
      }

    var token = localStorage.getItem('token');
    if(token){
    const decodedToken = jwt_decode(token);
    token = decodedToken.id;

    }

    const makePayment=async(token)=>{
        console.log(token.id);
        var x=res.Price;
        if(res.Discount){
           x= newPrice(res.Price, res.Discount)
        }
        const product={Price:x};

        await axios.post("/payment", {
            id1,id,token,product  
        })
        .then((response) => {
            console.log("kolotmamm");
            if (!response.ok)
              throw Error("Can not Connect!!!!")

          })
        .catch((e) => {
            console.log(e.message)
        });
    }
    const feedbackRequest=() => {
        toast.success('Success Notification !', {
            position: toast.POSITION.BOTTOM_RIGHT
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
    }
        , [])

    return (
        <div className="container" key={1}>
          {res&&( <div>
            {res && (<div className="container">
                <strong></strong><br />
                <p ><strong>Title:</strong>{res.Title}</p>
                <p><strong>Major:</strong>{res.Major}</p>
                <p><strong>Hours:</strong>{res.Hours}</p>
                <p><strong>Rating:</strong>{res.Rating}</p>
                {type != "Corporate Trainee" && (<p><strong>Price:</strong>{res.Price}</p>)}
                {res.Subtitle && (res.Subtitle.map((ress, index) => (
                    <div>

                        {ress.name && (<div><p><strong>Subtitle#{index + 1}:</strong></p><br /> <pre><strong>   Name:</strong>{ress.name}</pre> </div>)}
                        {ress.Hour && (<div> <pre><strong>   Hours:</strong>{ress.Hour}</pre> <br /></div>)}
                    </div>

                )
                )


                )}
                {res.Discount && (
                    <div>
                        <p><strong>Discount:</strong>{res.Discount}%</p>
                        {res.Price && (<p><strong>New Price After Discount:</strong>{
                            newPrice(res.Price, res.Discount)
                        }</p>)}
                    </div>
                )

                }
                {/* <Link to='/quiz' className="btn btn-success" >Take Exam</Link> */}
              {token&&type=="Corporate Trainee"&&(<div>
                <Link  className="btn btn-success" onClick={()=>{RequestAccess(); 
                }} >Request Access </Link>
                </div>)}
                
                <hr />
            </div>
            )}

            {res && res.PreviewLink && (<div>
                <h3 style={{color:"blue"}}>Course Preview:</h3>
                <iframe width="560" height="315" src={res.PreviewLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br />
            </div>)
            }
            <h3 style={{color:"blue"}}>Course OutLine:</h3>
            {res && res.outline && (<div><strong>{res.outline}</strong></div>)}
            {/* <br /> */}
            {token&&type=="Individual Trainee"&&res&&res.Price&&(<StripeCheckOut
                stripeKey='pk_test_51MJGoaDTXWnAI3NWgFcibrLzV9d8Hrs8IapaXiX8sWm0QQhQM1jCm9irpHh5t5BH3sXdGxAgE2ER05cmZoKfmD2500qjn0w4XW'
                token={makePayment}
                name="BuyCourse"
                amount={ newPrice(res.Price, res.Discount)*100}/>)}
            {/* <Link to='/register' className="btn btn-success" >Regisiter Now</Link> */}
            </div>)}
          {!res&&(                    <div class="spinner-border text-primary mt-5" role="status">
                        <span class="sr-only"></span>
                    </div>)}  
          
        </div>
    );


}
export default Course