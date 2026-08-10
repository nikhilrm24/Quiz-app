import { useState,useEffect } from "react";
function AdminQuestion(){
    const[questions,setQuestions]=useState([]);
    const[question,setQuestion]=useState("");
    const[option1,setOption1]=useState("");
    const[option2,setOption2]=useState("");
    const[option3,setOption3]=useState("");
    const[option4,setOption4]=useState("");
    const[correct_answer,setCorrectAnswer]=useState("");
    const [editId,seteditId]=useState(null);
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
   
   async function deleteQuestion(id) {
      try{
        const response=await fetch(`http://localhost:3000/api/questions/${id}`,
            {
                method:"DELETE",
            }
        );
        if(!response.ok){
            throw new Error("failed to delete question");
        }
        setQuestions((prev)=>
           prev.filter((q)=>q.id!==id)
        );
      }catch(error){
        setError(error.message);
      }
    
   }

   async function addQuestion() {

    try{
       
       if(editId!=null){
        
        const response=await fetch(`http://localhost:3000/api/questions/${editId}`,{
            method:"PUT",headers:{"content-Type":"application/json"},body:JSON.stringify({
                question,option1,option2,option3,option4,correct_answer
            })
        });
        if(!response.ok){
            throw new Error("failed to update question");
        }

        const updateQ=await response.json();
        setQuestions((prev)=>prev.map((q)=>
         q.id===editId?updateQ:q));
        seteditId(null);
       }else{
         const response=await fetch("http://localhost:3000/api/questions",{
        method:"POST",
        headers:{"content-type":"application/json",},
        body:JSON.stringify({
            question,option1,option2,option3,option4,correct_answer,
        }),
    }
);


if(!response.ok){
    throw new Error("failed to add new Question");
}

const newQuestion=await response.json();



setQuestions((prev)=>[...prev,newQuestion]);
setQuestion("");
setOption1("");
setOption2("");
setOption3("");
setOption4("");
setCorrectAnswer("");
       }
    }catch(e){
         setError(e.message);
    }
    
   }
function editQ(q){
    seteditId(q.id);
    setQuestion(q.question);
    setOption1(q.option1);
    setOption2(q.option2);
    setOption3(q.option3);
    setOption4(q.option4);
    setCorrectAnswer(q.correct_answer);
}

    return(
        <div>
            <h1>admin Questions</h1>
            <div>
                <h2>Add Question</h2>
                <input placeholder="Question" value={question}
                 onChange={(e)=>setQuestion(e.target.value)}
                 />

                 <input placeholder="option1" value={option1}
                 onChange={(e)=>setOption1(e.target.value)}
                 />

                 <input placeholder="option2" value={option2}
                 onChange={(e)=>setOption2(e.target.value)}
                 />
                 <input placeholder="option3" value={option3}
                 onChange={(e)=>setOption3(e.target.value)}
                 />
                 <input placeholder="option4" value={option4}
                 onChange={(e)=>setOption4(e.target.value)}
                 />
                 <input placeholder="correct answer" value={correct_answer} 
                 onChange={(e)=>setCorrectAnswer(e.target.value)}
                 />
                 <button onClick={addQuestion}>{editId!==null?"update Question":"edit question"}</button>
            </div>
            {questions.map((q)=>(
                <div key={q.id}>
                    <h3>{q.question}</h3>
                    <p>{q.option1}</p>
                    <p>{q.option2}</p>
                    <p>{q.option3}</p>
                    <p>{q.option4}</p>
                    <button onClick={()=>
                        editQ(q)
                    }>Edit</button>
                    <button onClick={()=>deleteQuestion(q.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default AdminQuestion;