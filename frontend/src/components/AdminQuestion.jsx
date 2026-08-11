import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AdminQuestion(){
    const navigate=useNavigate();

    const[questions,setQuestions]=useState([]);
    const[question,setQuestion]=useState("");
    const[option1,setOption1]=useState("");
    const[option2,setOption2]=useState("");
    const[option3,setOption3]=useState("");
    const[option4,setOption4]=useState("");
    const[correct_answer,setCorrectAnswer]=useState("");
    const [editId,seteditId]=useState(null);
    const[error,setError]=useState("");

    useEffect(()=>{
        const isAdmin=localStorage.getItem("isAdmin");
        if(isAdmin!="true"){
            navigate("/admin-login");
        }
    },[]);

 function handleLogout(){
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
 }



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
     <div className="min-h-screen bg-gray-100 p-6">
        <section>
        <div className="">
                    <div className="mx-auto flex items-center justify-between mb-8 max-w-6xl"> 
                        <h1 className="text-3xl font-bold text-gray-800">admin Questions</h1>
                         <button onClick={handleLogout} className="rounded-lg bg-red-500 px-5 py-2 font-semibold text-white hover:bg-red-600">logout</button>
                    </div>
             <div className="mx-auto mb-8 max-w-xl rounded-xl bg-white p-6 shadow-lg">
                    <div className=" mb-5 text-2xl font-bold text-gray-800">
                        <h3>{editId!=null?"Update question":"Add question"}:</h3>
                    </div>
                <div className="grid gap-4">
                    <input 
                    className="w-full rounded-lg border border-gray-300
                    p-3 outline-none focus:border-blue-500
                    text-gray-800 focus:ring-2
                    focus:ring-blue-200
                    " placeholder="Question"
                     value={question}
                    onChange={(e)=>setQuestion(e.target.value)}
                    />

                    <input
                    className="w-full rounded-lg border border-gray-300
                    p-3 outline-none focus:border-blue-500 
                    text-gray-800 focus:ring-2
                    focus:ring-blue-200
                    " placeholder="option1" value={option1}
                    onChange={(e)=>setOption1(e.target.value)}
                    />

                    <input 
                    className="w-full rounded-lg border border-gray-300
                    p-3 outline-none focus:border-blue-500
                    text-gray-800 focus:ring-2
                    focus:ring-blue-200
                    " placeholder="option2" value={option2}
                    onChange={(e)=>setOption2(e.target.value)}
                    />
                    <input 
                    className="w-full rounded-lg border border-gray-300
                    p-3 outline-none focus:border-blue-500
                    text-gray-800 focus:ring-2
                    focus:ring-blue-200
                    " placeholder="option3" value={option3}
                    onChange={(e)=>setOption3(e.target.value)}
                    />
                    <input 
                    className="w-full rounded-lg border border-gray-300
                    p-3 outline-none focus:border-blue-500
                    text-gray-800 focus:ring-2
                    focus:ring-blue-200
                    " placeholder="option4" value={option4}
                    onChange={(e)=>setOption4(e.target.value)}
                    />
                    <input
                    className="w-full rounded-lg border border-gray-300
                    p-3 outline-none focus:border-blue-500
                    text-gray-800 focus:ring-2
                    focus:ring-blue-200
                    "  placeholder="correct answer" value={correct_answer} 
                    onChange={(e)=>setCorrectAnswer(e.target.value)}
                    />
                    <button onClick={addQuestion} className="rounded-lg bg-blue-500
                    px-5 py-3 font-semibold 
                    text-white hover:bg-blue-700">{editId!==null?"update Question":"add question"}</button>
                </div>
             </div>
        </div>

            <div className="flex justify-center items-center">
                <button onClick={()=>
                    document.getElementById("all-question").scrollIntoView({behavior:"smooth"})}
                    className="rounded-lg bg-gray-700 px-5 py-3 font-semibold
                    text-white hover:bg-gray-800"
                    >view All Question</button>
            </div>

                <div id="all-question" className="space-y-5 max-w-6xl">
                    <h2> All Questions</h2>
                    {questions.map((q)=>(
                    <div key={q.id} className="rounded-xl bg-white p-6 shadow-md ">
                        <h3 className="mb-4 text-lg font-semibold text-gray-800">{q.question}</h3>
                        <div className="grid grid-cols-2 gap-3 mt-3">
                        <p className="text-gray-700 rounded-lg p-3 bg-gray-50">{q.option1}</p>
                        <p className="text-gray-700 rounded-lg p-3 bg-gray-50">{q.option2}</p>
                        <p className="text-gray-700 rounded-lg p-3 bg-gray-50">{q.option3}</p>
                        <p className="text-gray-700 rounded-lg p-3 bg-gray-50">{q.option4}</p>
                        </div>
                       <div className="flex gap-2 ">
                         <button onClick={()=>
                            editQ(q)
                        }
                        className="rounded-lg bg-blue-600
                        px-4 py-2 text-white
                        hover:bg-blue-700">Edit</button>
                        <button onClick={()=>deleteQuestion(q.id)}
                            className="rounded-lg bg-blue-600
                        px-4 py-2 text-white
                        hover:bg-blue-700"  >Delete</button>
                       </div>
                    </div>
                ))}
                </div>
            </section>
           
        </div>
    );
}

export default AdminQuestion;