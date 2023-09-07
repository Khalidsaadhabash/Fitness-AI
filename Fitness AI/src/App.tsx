import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import LoginChat from "./pages/LoginChat";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
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
      
  );
};

export default App;