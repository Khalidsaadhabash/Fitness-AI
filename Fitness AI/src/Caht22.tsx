import { Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
  import LoginChat from "./Pages/LoginChat"
  import { PrivateRoute } from "./routes/PrivateRoute"
  import ChatRoom from "./Pages/ChatRoom"
import Navbarpages from "./components/Navbarpages"
export default function Caht22() {
  return (
    <div>
    <AuthProvider>
      <Navbarpages></Navbarpages>
    <Routes>
      <Route path="/" element={<LoginChat />} />
      <Route
        path="/"
        element={
          <PrivateRoute><ChatRoom /></PrivateRoute>  
        }
      />
    </Routes>
    </AuthProvider>
    </div>
  )
}
