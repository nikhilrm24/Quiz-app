import { useEffect, useState } from "react";

function QuestionCard() {
  const [questions, setQuestions] = useState([]);
  const [currQuestion, setcurrQuestion] = useState(0);
  const [selectOption, setselectOption] = useState(null);
  const [isCrct, setisCrct] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const[error,setError]=useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/questions")
      .then((response) => {
        if(!response.ok){
          
           throw new Error("failedto fetch questions");
        }
        
        return response.json()})
      .then((data) => setQuestions(data))
      .catch((error)=>{
        setError(error.message);
      })
  }, []);
  
  if(error){
    return <p>{error}</p>
  }

  if (questions.length === 0) {
    return <p>Loading...</p>;
    
  }

  const current = questions[currQuestion];

  const options = [
    current.option1,
    current.option2,
    current.option3,
    current.option4,
  ];

  function changeQuestion() {
    if (currQuestion < questions.length - 1) {
      setcurrQuestion(currQuestion + 1);
      setselectOption(null);
      setisCrct("");
    } else {
      setShowResult(true);
    }
  }

  function checkAns(index) {
    if (options[index] === current.correct_answer) {
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

  function restartQuiz() {
    setcurrQuestion(0);
    setselectOption(null);
    setisCrct("");
    setScore(0);
    setShowResult(false);
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center ">
        <div className="w-full max-w-xl min-h-[300px] bg-white rounded-2xl shadow-xlp-10 text-center p-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Quiz Completed 🎉</h1>

          <p className="text-xl font-semibold text-gray-700 mb-6">
            Your Score: {score}/{questions.length}
          </p>

          <button onClick={restartQuiz} className="bg-blue-600 text-whie px-6 py-3 rounded-lg">Restart</button>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex justify-center items-center min-h-screen flex-col">
      
     <div className=" bg-white rounded-2xl shadow-lg w-full min-h-[450px] p-10 max-w-3xl ">
       <div className="">
        <h1 className=" text-3xl font-bold text-center text-blue-600 mb-8">Quiz App</h1>

        <p className="text-2xl font-bold 
        text-gray-800 mb-6">{current.question}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              selectIndex(index);
              checkAns(index);
            }}
            // className={
            //   index === selectOption
            //     ? isCrct === "correct answer"
            //       ? "crct"
            //       : "wrong"
            //     : ""
            // }

             className={
              `w-full rounded-xl border p-4 text-left
              font-medium transition ${
                index===selectOption? isCrct=== "correct answer" ?
                "bg-green-200 text-green-700":
                "bg-red-100 border-red-500 text-red-700":
                "bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-400"
              }` }
          >
            {option}
          </button>
        ))}
      </div>
      <p className="text-center mt-4 font-semibold text-lg">{isCrct}</p>
     </div>
      
    </div>
  );
}

export default QuestionCard;