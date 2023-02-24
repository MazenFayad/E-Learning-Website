import React, { useState } from 'react';
import axios from 'axios';

const CreateQuiz = () =>{
    const sendMessage = () => {
        alert('Request sent successfully');
      }
   
    const  [courseName,setcourseName]=useState(null);
    const  [question,setQuestion]=useState(null);
    const  [firstChoice,setFirstChoice]=useState(null);
    const  [secondChoice,setSecondChoice]=useState(null);
    const  [thirdChoice,setThirdChoice]=useState(null);
    const  [fourthChoice,setFourthChoice]=useState(null);
    const  [answer,setAnswer]=useState(null);

    const  [question1,setQuestion1]=useState(null);
    const  [firstChoice1,setFirstChoice1]=useState(null);
    const  [secondChoice1,setSecondChoice1]=useState(null);
    const  [thirdChoice1,setThirdChoice1]=useState(null);
    const  [fourthChoice1,setFourthChoice1]=useState(null);
    const  [answer1,setAnswer1]=useState(null);


    const  [question2,setQuestion2]=useState(null);
    const  [firstChoice2,setFirstChoice2]=useState(null);
    const  [secondChoice2,setSecondChoice2]=useState(null);
    const  [thirdChoice2,setThirdChoice2]=useState(null);
    const  [fourthChoice2,setFourthChoice2]=useState(null);
    const  [answer2,setAnswer2]=useState(null);

    const  [question3,setQuestion3]=useState(null);
    const  [firstChoice3,setFirstChoice3]=useState(null);
    const  [secondChoice3,setSecondChoice3]=useState(null);
    const  [thirdChoice3,setThirdChoice3]=useState(null);
    const  [fourthChoice3,setFourthChoice3]=useState(null);
    const  [answer3,setAnswer3]=useState(null);

    const handleclick=async()=>{
        console.log("dddd");
        if(courseName==null||question==null||firstChoice==null||secondChoice==null||thirdChoice==null||fourthChoice==null||answer==null
            ||question1==null||firstChoice1==null||secondChoice1==null||thirdChoice1==null||fourthChoice1==null||answer1==null
            ||question2==null||firstChoice2==null||secondChoice2==null||thirdChoice2==null||fourthChoice2==null||answer2==null
            ||question3==null||firstChoice3==null||secondChoice3==null||thirdChoice3==null||fourthChoice3==null||answer3==null
            ){
                alert('Please Complete the data');
            }
            else{
        //courseid, question,firstChoice,secondChoice,thirdChoice,fourthChoice,answer
        console.log(courseName)
       var list=[{question,firstChoice,secondChoice,thirdChoice,fourthChoice,answer},{"question":question1,"firstChoice":firstChoice1,"secondChoice":secondChoice1,"thirdChoice":thirdChoice1,"fourthChoice":fourthChoice1,"answer":answer1},{"question":question2,"firstChoice":firstChoice2,"secondChoice":secondChoice2,"thirdChoice":thirdChoice2,"fourthChoice":fourthChoice2,"answer":answer2},{"question":question3,"firstChoice":firstChoice3,"secondChoice":secondChoice3,"thirdChoice":thirdChoice3,"fourthChoice":fourthChoice3,"answer":answer3}]
        await axios.post(`http://localhost:4000/createquiz`,{list,courseName})
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
      sendMessage();
    }
}
    return(
        <div style={{marginLeft:'-700px'}}>
            <div >
                <h2>Quiz 1</h2>

                <br></br>
                <label> <strong>Course Name :</strong></label>
                <br></br>
                <input placeholder='Course Name' onChange= {(e) => setcourseName(e.target.value)} size={50}></input>
                <br></br>
                <label> <strong>Question 1:</strong></label>
                <br></br>
                <input placeholder='Question1' onChange= {(e) => setQuestion(e.target.value)} size={50}></input>
                <br></br>
                <label>Option 1:</label>
                <br></br>
                <input placeholder='First option'onChange= {(e) => setFirstChoice(e.target.value)}></input>
                <br></br>
                <label>Option 2:</label>
                <br></br>
                <input placeholder='Second option'onChange= {(e) => setSecondChoice(e.target.value)}></input>
                <br></br>
                <label>Option 3:</label>
                <br></br>
                <input placeholder='Third option'onChange= {(e) => setThirdChoice(e.target.value)}></input>
                <br></br>
                <label>Option 4:</label>
                <br></br>
                <input placeholder='Fourth option'onChange= {(e) => setFourthChoice(e.target.value)}></input>
                <br></br>
                <br></br>
                <label>Correct Answer:</label>
                <input placeholder='Enter the correct option' name='correctAnswer4' onChange= {(e) => setAnswer(e.target.value)}></input>
                <hr></hr>
            </div>
            <div>
                <label> <strong>Question 2:</strong></label>
                <br></br>
                <input placeholder='Question2' onChange= {(e) => setQuestion1(e.target.value)} size={50}></input>
                <br></br>
                <label>Option 1:</label>
                <br></br>
                <input placeholder='First option'onChange= {(e) => setFirstChoice1(e.target.value)}></input>
                <br></br>
                <label>Option 2:</label>
                <br></br>
                <input placeholder='Second option'onChange= {(e) => setSecondChoice1(e.target.value)}></input>
                <br></br>
                <label>Option 3:</label>
                <br></br>
                <input placeholder='Third option'onChange= {(e) => setThirdChoice1(e.target.value)}></input>
                <br></br>
                <label>Option 4:</label>
                <br></br>
                <input placeholder='Fourth option'onChange= {(e) => setFourthChoice1(e.target.value)}></input>
                <br></br>
                <br></br>
                <label>Correct Answer:</label>
                <input placeholder='Enter the correct option' name='correctAnswer4' onChange= {(e) => setAnswer1(e.target.value)}></input>
                <hr></hr>
            </div>
            <div>
                <label> <strong>Question 3:</strong></label>
                <br></br>
                <input placeholder='Question3' onChange= {(e) => setQuestion2(e.target.value)} size={50}></input>
                <br></br>
                <label>Option 1:</label>
                <br></br>
                <input placeholder='First option'onChange= {(e) => setFirstChoice2(e.target.value)}></input>
                <br></br>
                <label>Option 2:</label>
                <br></br>
                <input placeholder='Second option'onChange= {(e) => setSecondChoice2(e.target.value)}></input>
                <br></br>
                <label>Option 3:</label>
                <br></br>
                <input placeholder='Third option'onChange= {(e) => setThirdChoice2(e.target.value)}></input>
                <br></br>
                <label>Option 4:</label>
                <br></br>
                <input placeholder='Fourth option'onChange= {(e) => setFourthChoice2(e.target.value)}></input>
                <br></br>
                <br></br>
                <label>Correct Answer:</label>
                <input placeholder='Enter the correct option' name='correctAnswer4' onChange= {(e) => setAnswer2(e.target.value)}></input>
                <hr></hr>
            </div>
            <div>
                <label> <strong>Question 4:</strong></label>
                <br></br>
                <input placeholder='Question4' onChange= {(e) => setQuestion3(e.target.value)} size={50}></input>
                <br></br>
                <label>Option 1:</label>
                <br></br>
                <input placeholder='First option'onChange= {(e) => setFirstChoice3(e.target.value)}></input>
                <br></br>
                <label>Option 2:</label>
                <br></br>
                <input placeholder='Second option'onChange= {(e) => setSecondChoice3(e.target.value)}></input>
                <br></br>
                <label>Option 3:</label>
                <br></br>
                <input placeholder='Third option'onChange= {(e) => setThirdChoice3(e.target.value)}></input>
                <br></br>
                <label>Option 4:</label>
                <br></br>
                <input placeholder='Fourth option'onChange= {(e) => setFourthChoice3(e.target.value)}></input>
                <br></br>
                <br></br>
                <label>Correct Answer:</label>
                <input placeholder='Enter the correct option' name='correctAnswer4' onChange= {(e) => setAnswer3(e.target.value)}></input>
                <br></br>
                <br></br>
                <button className='btn btn-primary' on onClick={()=>{handleclick()}}>Submit quiz</button>
                <hr></hr>
            </div>

        

        </div>
    )
}

export default  CreateQuiz;