import Vedio from "../Imges/production_id_4367573 (1080p).mp4";
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbarmain from '../components/Navbarmain';
import Footer from '../components/Footer';

type userInfo ={
    userName:string;
    password: string;
    email: string; 
   
}
 export const Signup1=()=> {
    const [form, setForm] = useState<userInfo>({
        userName: "",
        password: "",
        email: ""
    });

    const navi = useNavigate();

    const Signup1 = () => {
        if (form.userName === '' || form.password === '' || form.email === '') {
            Swal.fire({
                icon: 'error', // Use 'error' icon for error message
                title: 'Please Fill All The Fileds.', // Your error message
                showConfirmButton: false,
                timer: 1500,
                iconColor: 'red', // You can specify the color of the error icon here
              });
        }
        else if (form.userName.length < 6 || form.userName.length > 15) {
        alert('userName must be between 6 and 15 characters.');
        }
        else if(form.email.length < 10 || form.email.length > 30){
        alert('Email must be between 10 and 15 characters.');
        }
        else if (form.password.length < 6) {
        alert('Password must be at least 6 characters.');
       
      }
    else{
        axios.post('https://64edeb521f872182714202f9.mockapi.io/InformationUser', {
            userName: form.userName,
            password: form.password,
            email: form.email
          })
          .then((response) => 
          {console.log(response)
            localStorage.setItem("userName", form.userName);
            localStorage.setItem("email", form.email);
            localStorage.setItem("userName", form.password);
        })
       

        Swal.fire({
            icon: 'success',
            title: 'Sign Up successfully!',
            showConfirmButton: false,
            timer: 1500,
            iconColor: 'green'
          })
          navi("/Homepage1");
        }
    }
  return (
    <div>
<Navbarmain></Navbarmain>
    <div className="flex justify-center items-center min-h-screen relative">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src={Vedio} type="video/mp4" />
      </video>
  
      <div className="flex flex-col justify-center items-center w-5/12 shadow-lg font-serif ">
        <div className="rounded-md w-11/12 shadow-lg backdrop-blur-md bg-opacity-60 bg-white">
          <div className="text-white">
            <div className="mb-5 flex flex-col items-center font-serif">
              <h1 className="mb-2 text-3xl mt-9 font-sans font-bold text-orange-400">Create account</h1>
              <span className="text-gray-300"></span>
            </div>
  
            <form action="#">
              <div className="mb-4  flex flex-col items-center">
                <h1 className="pb-2 text-xl  flex items-start "></h1>
                <input
                  className="rounded-2xl flex items-center bg-gray-700 bg-opacity-50 px-14 py-2 text-center  placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="name"
                  placeholder="@UserName"
                  value={form.userName} onChange={(e) => setForm({ ...form, userName: e.target.value })}/>
              </div>
              <div className="mb-4  flex flex-col items-center">
                <h1 className="pb-2 text-xl"></h1>
                <input
                  className="rounded-2xl flex items-center bg-gray-700 bg-opacity-50 px-14 py-2 text-center  placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="email"
                  name="name"
                  placeholder="Example@gmail.com"
                  value={form.email}  onChange={(e) => setForm({ ...form, email: e.target.value })}/>
              </div>

              <div className="mb-4  flex flex-col items-center">
                <h1 className="pb-2 text-xl "></h1>
                <input
                  className="rounded-2xl flex items-center bg-gray-700 bg-opacity-50 px-14 py-2 text-center  placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="password"
                  name="name"
                  placeholder="*********"
                  value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}/>
              </div>
  
              <div className="mb-6">
                <a href="/Login1">
                  <p className="text-gray-700 text-l text-center">Already have an account?</p>
                </a>
              </div>
              <div className="mt-6 mb-2 flex justify-center text-lg text-gray-700">
                <button
                  className="rounded-xl text-white px-6 py-3 text-base mb-1 transition duration-200 bg-gray-700 hover:text-white   md:mx-2 border-2 bg-opacity-80 border-white hover:bg-gray-900 hover:bg-opacity-50 "
                  onClick={Signup1}>
                Sign up
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

 

export default Signup1