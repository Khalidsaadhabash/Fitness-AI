import Message from "./Message";
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";

interface Message {
  id: string;
  
  // Add other properties of the message object
}


const ChatBox: React.FC = (props:any) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMassages] = useState<Message[]>([]);

  

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages: Message[] = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id } as Message);
      });
      setMassages(messages);
    });

    return () => unsubscribe();
  }, []);

 

  return (
    <div className="h-100 bg-slate-50 pb-44 pt-20 containerWarp ">
      
      
      {messages.map((message) => (
        <Message  key={message.id} message={message } {...props} />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;