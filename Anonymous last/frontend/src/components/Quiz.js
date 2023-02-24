import React, {useState} from "react";
import '../App.css';

import Option from "./Option";

const Quiz = () => {
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    

 
   

    //Array of questions
    const questions = [
        {
            
              // when option picked grade does not change
            isClicked: false,
            text: "What is Computer Science?",
            options: [
                { id: 0, text: "The study of algorithms", isCorrect: true, isRed: false, isGreen: false, isGrey: true},
                { id: 1, text: "The study of loops", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
                { id: 2, text: "The study of equations", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
                { id: 3, text: "The study of vectors", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
        ],
        },
        {
            
            isClicked: false,
            text: "What is the GCD of 132 and 168?",
            options: [
                { id: 4, text: "17", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
                { id: 5, text: "12", isCorrect: true, isRed: false, isGreen: false, isGrey: true},
                { id: 6, text: "15", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
                { id: 7, text: "13", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
        ],
        },
        {
            
            isClicked: false,
            text: "What is the length of this List A={1,2,3,4}?",
            options: [
                { id: 8, text: "4", isCorrect: true, isRed: false, isGreen: false, isGrey: true},
                { id: 9, text: "3", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
                { id: 10, text: "2", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
                { id: 11, text: "5", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
        ],
        },
        {
            
            isClicked: false,
            text: "What is the element at position 2 of the this List A=[0,1,9,3]?",
            options: [
                { id: 12, text: "1", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
                { id: 13, text: "9", isCorrect: true, isRed: false, isGreen: false, isGrey: true},
                { id: 14, text: "3", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
                { id: 15, text: "0", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
        ],
        },
    ];

    const [myStateQuestions, setMyStateQuestion] = useState(questions)
    
    

   
    const handleClick = (id) => 
    {
        let num = Math.floor(id / 4)
        setMyStateQuestion(() => {
            const newState = myStateQuestions.map((item) => {
                const options = item.options
                if(item.isClicked === true)
                {
                    return item
                }

                
                const newOptions = options.map((option) => {

                    if(Math.floor(option.id / 4) === num)
                    {
                        if(id === option.id)
                        {
                            if(option.isCorrect)
                            {
                                if(!option.isGreen)
                                {
                                    setScore((prevScore) => {
                                        return prevScore + 1
                                    })
                                }
                                option.isGreen = true
                                
                                
                            }
                            else
                            {
                                option.isRed = true
                            }
                            option.isGrey = false
                        }
                        else
                        {
                            if(option.isCorrect)
                            {
                                option.isGreen = true
                                option.isGrey = false
                            }
                        }
                    }
                    return option
                })
                if(Math.floor(item.options[0].id / 4) === num) {
                    item.isClicked = true
                }
                item.options = newOptions
                
                return item

            })
            return newState

           
        })
        
    }
    let questionComponent
    if(currentQuestion < questions.length) {
         questionComponent = myStateQuestions[currentQuestion].options.map((option) => {
            return <Option text = {option.text} isGreen = {option.isGreen} isRed = {option.isRed} isGrey = {option.isGrey} id = {option.id} handleClick = {handleClick} />
    
        })
    }
   

    function nextQuestion(event) {
        event.preventDefault()
        if(currentQuestion < questions.length - 1)
        {
            setCurrentQuestion((currentVal) => {
                return currentVal + 1
            })
        }
        else{
            setShowResults(true)
        }
        
    }


    return (
        <div className="Quiz">
            <h1>CSEN101 quiz</h1>
            <form onSubmit = {nextQuestion}>
                <button className="btn btn-primary">go to next question</button>
            </form>    
            <h2>Grade: {score}</h2>
            {
                showResults ? 
                    (
                        <div className="final-results">
                            <h1>Final Results</h1>
                            <h2>
                                {score} out of {questions.length} correct - (
                                {(score / questions.length) * 100}%)
                            </h2>
                        </div>
                    ) : 
                    (
                        
                        <div className="question-card">
                            <h2>
                                Question: {currentQuestion + 1} out of {questions.length}
                            </h2>
                            <h3 className="question-text">{questions[currentQuestion].text}</h3>
                            {questionComponent}
                        </div>
                    )
            }
        </div>
    );
};

export default Quiz