import { Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
  import LoginChat from "./Pages/LoginChat"
  import { PrivateRoute } from "./routes/PrivateRoute"
  import ChatRoom from "./Pages/ChatRoom"
export default function Caht22() {
  return (
    <div>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<LoginChat />} />
      <Route
        path="/chatloginn"
        element={
          <PrivateRoute><ChatRoom /></PrivateRoute>
            
          
        }
      />
    </Routes>
    </AuthProvider>
    </div>
  )
}
