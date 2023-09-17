 import { Route, Routes } from "react-router-dom"
  import Homemain from "./Pages/Homemain"
  import Signup1 from "./Pages/Signup1"
  import Login1 from "./Pages/Login1"
  import Homepage1 from "./Pages/Homepage1"
  import ExerciseDete from './Pages/ExerciseDete'
  import Calculator from "./Pages/Calculator"
  function App() {
  return (
      <>
         <Routes>
      <Route path = "/" element={<Homemain/>}></Route>
       <Route path = "/signup" element={<Signup1/>}></Route>
       <Route path = "/Login" element={<Login1/>}></Route>
       <Route path="/ExerciseDete" element={<ExerciseDete/>}/>
       <Route path="/Calculator" element={<Calculator/>}/>
       <Route path="/Homepage" element={<Homepage1/>}></Route>
  </Routes>
    </>
    )
  }
  
  export default App
            
     