import { Link } from "react-router-dom";

function Home(){
  
    return(
        <div className="min-h-screen justify-center flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
           <div className=" text-center ">
                <h1 className="text-5xl font-extrabold text-blue-600 mt-20 mb-4">Quiz App</h1>
                <h3 className="text-xl text-gray-600 mb-8">Test Your Marvel Knowledge</h3>
                   <div className="grid grid-cols-3 gap-4 my-6">
                    <img src="/marvel-mobile-wallpaper-6.jpg" alt="" className="w-40 h-40 object-cover
                    rounded-2xl shadow-lg"/>
                     <img src="/images (2).jpg" alt="" className="w-40 h-40 object-cover
                    rounded-2xl shadow-lg"/>
                     <img src="/images.jpg" alt="" className="w-40 h-40 object-cover
                    rounded-2xl shadow-lg"/>
                </div>
                <div className="flex justify-center gap-4">
                    <Link to="/quiz" className="bg-blue-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-600">Quiz</Link>
                <Link to="/admin" className="bg-gray-800 text-white px-7 py-3 rounded-lg font-semibold hover:bg-gray-900">Admin</Link>
                </div>

              
           </div>
       
        </div>


    )
}

export default Home;