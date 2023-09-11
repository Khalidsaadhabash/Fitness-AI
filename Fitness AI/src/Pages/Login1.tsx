import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Vedio from "../Imges/production_id_4367573 (1080p).mp4";
import Navbarmain from '../component/Navbarmain';
import Footer from '../component/Footer';
type userInfo ={
    userName:string;
    password: string; 
    id:string;
  }
  
  export const Login1 =()=> {
    const [formInfo, setformInfo] = useState<userInfo>({
      userName: "",
      password: "",
      id:""
  });
  
  const Login1 = () => {
    axios.get('https://64edeb521f872182714202f9.mockapi.io/InformationUser')
    .then((response) => {setformInfo(response.data)
        console.log(response.data)
        const matchedAccount = response.data.find(
            (account: userInfo) => account.userName === formInfo.userName && account.password === formInfo.password
          );
        if(matchedAccount){
            Swal.fire({
                icon: 'success',
                title: 'Log in successfully!',
                showConfirmButton: false,
                timer: 1500,
                iconColor: 'green'

              })
              
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Login Error!',
            text: 'Your login attempt failed. Please check your credentials and try again.',
            showConfirmButton: false,
            timer: 1500,
            iconColor: 'red', 
          })
        }
      });
    }
  return (
    <div>
<Navbarmain></Navbarmain>
        <div className="flex justify-center items-center min-h-screen relative">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src={Vedio} type="video/mp4" />
        </video>
        <div className="flex flex-col justify-center items-center w-5/12 shadow-lg font-serif ">
          <div className=" rounded-md w-11/12 shadow-lg backdrop-blur-md bg-opacity-60 bg-white">
          <div className="text-white">
            <div className="mb-5 flex flex-col items-center ">
              <h1 className="mb-2 text-3xl mt-9 font-sans font-bold text-orange-400">Log in</h1>
              <span className="text-gray-300"></span>
            </div>
  
            <form action="#">
              <div className="mb-2 text-xl flex flex-col items-center">
                <h1 className="pb-2  flex-col2 "></h1>
                <input
                  className="rounded-2xl flex items-center bg-gray-700 bg-opacity-50 px-14 py-2 text-center  placeholder-slate-200 shadow-lg outline-none backdrop-blur-md "
                  type="text"
                  name="name"
                  placeholder="@UserName"
                  value={formInfo.userName} onChange={(e) => setformInfo({ ...formInfo, userName: e.target.value })}/>
              </div>
  
              <div className="mb-9 text-xl flex flex-col items-center">
                <h1 className="pb-2  flex-col2"></h1>
                <input
                  className="rounded-2xl flex items-center bg-gray-700 bg-opacity-50 px-14 py-2 text-center  placeholder-slate-200 shadow-lg outline-none backdrop-blur-md "
                  type="password"
                  name="name"
                  placeholder="*********"
                  value={formInfo.password}
                  onChange={(e) => setformInfo({ ...formInfo, password: e.target.value })} />
              </div>
              <div className="mb-6">
                <a href="/Signup1">
                  <p className="text-gray-700 text-l text-center">Didn't Sign Up?</p>
                </a>
              </div>
              <div className="mt-6 mb-2 flex justify-center text-lg text-gray-700">
                <button
                  className="rounded-xl text-white px-6 py-3 text-base mb-1 transition duration-200 bg-gray-700 hover:text-white   md:mx-2 border-2 bg-opacity-80 border-white hover:bg-gray-900 hover:bg-opacity-50 "
                  onClick={Login1} >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  )
}
export default Login1
