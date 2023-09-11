import {UserAuth} from "../context/AuthContext"
const Navbar = () => {
  const {currentUser ,logout}=UserAuth()

  const handleLogeout =async ()=>{
    try {
       await logout()
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className='navbar bg-neutral text-neutral-content '>
        <div className="containerWrap flex justify-between ">
  <a className="btn btn-ghost normal-case text-xl">fitness UI</a>
 {currentUser ?  <button onClick={handleLogeout}>Logout</button>:""}
</div>
    </div>
  )
}

export default Navbar