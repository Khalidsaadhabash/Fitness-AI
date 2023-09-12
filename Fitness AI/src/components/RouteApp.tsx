import { Route, Routes } from "react-router-dom"
import Homemain from "../Pages/Homemain"
import Signup1 from "../Pages/Signup1"
import Login1 from "../Pages/Login1"
import Homepage1 from "../Pages/Login1"
import ExerciseDete from '../Pages/ExerciseDete'
import { AuthProvider } from "../context/AuthContext"
import LoginChat from "../Pages/LoginChat"
import { PrivateRoute } from "../routes/PrivateRoute"
import ChatRoom from "../Pages/ChatRoom"
import Calculator from "../Pages/Calculator"

// import LoginChat from './Pages/LoginChat'
function RouteApp() {
return (
    <>
     {/* <Calculator/>  */}
   <Routes>
     <Route path = "/" element={<Homemain/>}>
       </Route>
       <Route path = "/signup1" element={<Signup1/>}></Route>
       <Route path = "/Login1" element={<Login1/>}></Route>
       <Route path="/Homepage1" element={<Homepage1/>}/>
       <Route path="/ExerciseDete" element={<ExerciseDete/>}/>
       <Route path="/Calculator" element={<Calculator/>}/>
       <Route path="/chat" element={<AuthProvider>
  
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
      </AuthProvider>}/>
  </Routes>
  
  
    </>
  )
}

export default RouteApp