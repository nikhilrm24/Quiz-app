import { useState } from "react";
import "./QuestionCard.css";

function QuestionCard() {
  const questions = [
    {
      question: "What is the first Marvel movie?",
      options: ["hulk", "iron man", "cap", "thor"],
      crctAns: "hulk",
    },
    {
      question: "Who is 1st avenger?",
      options: ["hulk", "iron man", "cap", "thor"],
      crctAns: "cap",
    },
    {
      question: "What's Hulk's name?",
      options: ["clint", "tony", "banner", "odinson"],
      crctAns: "banner",
    },
  ];

  const [currQuestion, setcurrQuestion] = useState(0);
  const [selectOption, setselectOption] = useState(null);
  const [isCrct, setisCrct] = useState("");
  const [score, setScore] = useState(0);
  const [showResult,setShowResult]=useState(false);

  const current = questions[currQuestion];

  function changeQuestion() {
    if (currQuestion < questions.length - 1) {
      setcurrQuestion(currQuestion + 1);
      setselectOption(null);
      setisCrct("");
    }else{
        setShowResult(true);
    }
  }

  function checkAns(index) {
    if (current.options[index] === current.crctAns) {
      setisCrct("correct answer");
      setScore((prev) => prev + 1);
    } else {
      setisCrct("wrong answer");
    }

    setTimeout(() => {
      changeQuestion();
  
    }, 2000);
  }

  function selectIndex(index) {
    setselectOption(index);
  }

  function restartQuiz(){
       setcurrQuestion(0);
       setselectOption(null);
       setisCrct("");
       setScore(0);
       setShowResult(false);
  }
  if(showResult){
        return(
            <div className="res">
                <div className="res-temp">
                <p>Quiz completed🎉</p>
                 
                <p>your Score :{score}/{questions.length}</p>
              
                <button onClick={restartQuiz}>Restart</button>
                </div>
              
            </div>
        )
    }

  return (
    <>
      <div className="main">
        <h1>Quiz App</h1>

        <p>{current.question}</p>

        <div className="btn">
          {current.options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                selectIndex(index);
                checkAns(index);
              }}
              className={index === selectOption ? isCrct==="correct answer"?"crct":"wrong":""}
            >
              {option}
            </button>
          ))}
        </div>

        <p>{isCrct}</p>


      </div>
    </>
  );
}

export default QuestionCard;