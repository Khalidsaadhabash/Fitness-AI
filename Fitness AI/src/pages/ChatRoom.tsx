import ChatBox from "../components/ChatBox"
import SendMessage from "../components/SendMessage"
import { AuthProvider } from "../context/AuthContext"


const ChatRoom = () => {
  return (
    <div>
       <AuthProvider/>
      <ChatBox />
      <SendMessage/>
    </div>
  )
}

export default ChatRoom