import { useEffect } from 'react'
import { AuthProvider, UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const LoginChat = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signinWithGoogle();

    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/chatloginn")
    }
  }, [currentUser]);

  return (
   
    <div className="hero min-h-screen bg-white">
       <AuthProvider/>
      <div className="hero-content text-center">
        <div className="max-w-md">
        <div className="text-2xl font-bold text-slate-800 md:text-7xl">
            <h1>Fitness <span className='  bg-orange-500 text-gray-100  md:mx-2 font-bold bg-opacity-40 hover:bg-slate-400 hover:bg-opacity-30'>AI</span></h1>
            </div>
          <p className="py-6">
          Join the conversation, With specialized fitness trainers
          </p>
          <button onClick={handleLogin} className="btn py-2 px-2 rounded bg-orange-700 text-gray-100  md:mx-2 font-bold bg-opacity-40 hover:bg-slate-400 hover:bg-opacity-30">Login With Google</button>
        </div>
      </div>
    </div>
  );
};


export default LoginChat