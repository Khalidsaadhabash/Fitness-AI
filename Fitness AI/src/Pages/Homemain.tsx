import Vedio from "../Imges/pexels-asma-alanzi-18331555 (2160p).mp4"
import Footer from '../components/Footer'
export default function Homemain() {
  return (
<div>
<nav className="shadow-lg nav-container fixed top-0 w-full z-50 ">
    <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-100 md:text-3xl">
            <p>Fitness <span className=' text-orange-400'>AI</span></p>
            </div>
        </div>
    </div>
</nav>
<div className="flex justify-center container my-auto w-auto h-screen items-center flex-col ml-auto">
    <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 font-sans z-40 ">
                <div>
                    <div className="flex justify-start mt-36 ">
                        <button className="px-4 py-3   rounded bg-slate-900 text-gray-100  md:mx-2 font-bold border-2 bg-opacity-10 border-white hover:bg-slate-100 hover:bg-opacity-20 "> <a href="/Signup1">Join now</a></button>
                        <button className="mx-4 px-4 py-3  text-gray-100  hover:bg-gray-500 md:mx-2 font-bold bg-orange-500 bg-opacity-80 hover:bg-opacity-60 "><a href="/Login1">Log in</a></button>
                    </div>
                </div>
     </div>
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
            <source src={Vedio} type="video/mp4" />
        </video>
</div>
<Footer></Footer> 
</div>
  )
}
