import './App.css'
import Home from './components/Home';
import QuestionCard from './components/QuestionCard'
import AdminQuestion from './components/AdminQuestion'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import AdminLogin from './components/AdminLogin';

function App() {
  return(
    <>
    <BrowserRouter>
     <nav className="flex items-center gap-6 px-8 py-4 bg-white shadow-md">
          <Link to="/quiz">Quiz</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/">Home</Link>
         </nav>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}></Route>
        <Route path="/admin" element={<AdminQuestion/>}/>
        <Route path="/quiz" element={<QuestionCard/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
