import { Link } from "react-router-dom";

function Home(){
  
    return(
        <>
        <h1>Quiz App</h1>
        <h3>Test Your Marvel Knowledge</h3>
        
          <Link to="/quiz">Quiz</Link>
          <Link to="/admin">Admin</Link>
       
        </>


    )
}

export default Home;