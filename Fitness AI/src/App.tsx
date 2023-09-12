// import './App.css'
// import { Routes, Route } from "react-router-dom"
// import Homepage1 from './Pages/Homepage1'
// import Login1 from './Pages/Login1'
// import Signup1 from './Pages/Signup1'
// import Homemain from './Pages/Homemain'
// import ExerciseDete from './Pages/ExerciseDete'
// import Calculator from './Pages/Calculator'
// import { AuthProvider } from './context/AuthContext'
// import NavbarChat from './components/Navbar'
// import { PrivateRoute } from './routes/PrivateRoute'
// import ChatRoom from './Pages/ChatRoom'


    {/* <Calculator/> */}
    // <ExerciseDete/>
    
    {/* <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginChat />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
      </AuthProvider>
       */}
  

  //     {/* <Routes>
  //      <Route path = "/" element={<Homemain/>}>
  //      </Route>
  //      <Route path = "/signup1" element={<Signup1/>}></Route>
  //      <Route path = "/Login1" element={<Login1/>}></Route>
  //      <Route path="/Homepage1" element={<Homepage1/>}/>
  // </Routes> */}


          
 
  import { Route, Routes } from "react-router-dom"
  import Homemain from "./Pages/Homemain"
  import Signup1 from "./Pages/Signup1"
  import Login1 from "./Pages/Login1"
  import Homepage1 from "./Pages/Login1"
  import ExerciseDete from './Pages/ExerciseDete'
  import { AuthProvider } from "./context/AuthContext"
  import LoginChat from "./Pages/LoginChat"
  import { PrivateRoute } from "./routes/PrivateRoute"
  import ChatRoom from "./Pages/ChatRoom"
  import Calculator from "./Pages/Calculator"
import Caht22 from "./Caht22"
  
  // import LoginChat from './Pages/LoginChat'
  function App() {
  return (
      <>
       {/* <Calculator/>  */}
     <Routes>
       <Route path = "/" element={<Homemain/>}>
         </Route>
         <Route path = "/signup1" element={<Signup1/>}></Route>
         <Route path = "/Login1" element={<Login1/>}></Route>
         <Route path="/Homepage1" element={<Homepage1/>}></Route>
         <Route path="/ExerciseDete" element={<ExerciseDete/>}></Route>
         <Route path="/Calculator" element={<Calculator/>}></Route>
         <Route path="/chatloginn" element={<Caht22/>}></Route>
        
    </Routes> 
    <Routes></Routes>
  
      </>
    )
  }
  
  export default App
            
           {/* <AuthProvider>
     
      <Routes>
        <Route path="/" element={<LoginChat />} />
        <Route
          path="/chatloginn"
          element={
            <PrivateRoute><ChatRoom /></PrivateRoute>
              
            
          }
        />
      </Routes>
      </AuthProvider>*/}