import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

export default function Homepage1() {
  return (
   
   
<div className="   ">
    <Navbar></Navbar>
     
        <div className="flex justify-center container my-auto w-auto h-screen items-center flex-col ml-auto">
            <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 font-sans z-40 ">
          
            </div>
        <video autoPlay muted loop className="absolute inset-0 h-screen w-screen object-cover">
          <source src="./src/Imges/production_id_4367573 (1080p).mp4" type="video/mp4" />
            </video>
        </div>
    
        <Footer></Footer>
    </div>
  );
};
