import Vedio from "../Imges/pexels-asma-alanzi-18331555 (2160p).mp4"
import Footer from "../component/Footer";
import Navbar from "../component/Navbar"

export default function Homepage1() {
  return (
   
   
<div className="   ">
    <Navbar></Navbar>
     
        <div className="flex justify-center container my-auto w-auto h-screen items-center flex-col ml-auto">
            <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 font-sans z-40 ">
          
            </div>
        <video autoPlay muted loop className="absolute inset-0 h-screen w-screen object-cover">
          <source src={Vedio} type="video/mp4" />
            </video>
        </div>
    
        <Footer></Footer>
    </div>
  );
};