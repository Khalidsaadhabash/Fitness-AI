import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import {db  } from "../firebase";
const SendMessage: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const { currentUser } = UserAuth();

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };
  const { logout}=UserAuth()

  const handleLogeout =async ()=>{
    try {
       await logout()
    } catch (error) {
      console.log(error);
      
    }}
  return (
    <div className="bg-gray-300 flex fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none bg-gray-100 text-slate-950 input-bordered input-error   rounded-r-none"
          type="text"
        />
        <button
          type="submit"
          className="w-auto btn join-item rounded-r-lg text-white  px-5 text-sm bg-orange-300"
        >
          Send
        </button>
        <div>

        <a className="btn btn-ghost normal-case text-lg text-stone-100 bg-gray-500">
 {currentUser ?  <button onClick={handleLogeout}>Logout</button>:""}</a></div>

  
        

      </form>

      
      
    </div>
  );
};

export default SendMessage;