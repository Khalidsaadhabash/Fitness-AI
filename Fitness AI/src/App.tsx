import './App.css'
import { Routes, Route } from "react-router-dom"
import Homepage1 from './Pages/Homepage1'
import Login1 from './Pages/Login1'
import Signup1 from './Pages/Signup1'
import Homemain from './Pages/Homemain'
function App() {
return (
    <>
<Routes>
        <Route path = "/" element={<Homemain/>}>
        </Route>
        <Route path = "/signup1" element={<Signup1/>}></Route>
        <Route path = "/Login1" element={<Login1/>}></Route>
        <Route path="/Homepage1" element={<Homepage1/>}/>
   </Routes>
    </>
  )
}

export default App
    {/* <Calculator/> */}
    
    
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
  


          
 
    
   
          
            
          