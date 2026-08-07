import { useState } from "react";
import "./QuestionCard.css"

function QuestionCard(){
    const questions=[{question:"what is the first Marvel movie",options:["hulk","iron man","cap","thor"]},
    {question:"who is 1st avenger",options:["hulk","iron man","cap","thor"]},{question:"whats hulk name",options:["clint","tony","banner","odinson"]}];

    const[currQuestion,setcurrQuestion]=useState(0);
    
    const current=questions[currQuestion];
    
     function changeQuestion(){
       if(currQuestion<questions.length-1){
         setcurrQuestion(currQuestion+1);
       }
        
        }
    return(
        <>
        <div className="main">
             <h1>Quiz App</h1>
           <p>{current.question}</p>

            <div className="btn">
                <button>{current.options[0]}</button>
                <button>{current.options[1]}</button>
                <button>{current.options[2]}</button>
                <button>{current.options[3]}</button>
            </div>

            <button onClick={changeQuestion}>Next Question</button>
            
        </div>
        </>
    )
}
export default QuestionCard;