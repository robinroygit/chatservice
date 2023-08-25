import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lobby from './Lobby'
import {HubConnectionBuilder,LogLevel} from "@microsoft/signalr"
import Chat from './component/Chat'

function App() {
  const [connection, setConnection] = useState(0)
  const [messages, setMessages] = useState([]);
  const [user,setUser] = useState();

  const joinRoom=async(user,room)=>{
    try {
      const connection = new HubConnectionBuilder()
      .withUrl("https://64e8f7127acdd6367b7b9c6d--incandescent-lily-b2f82c.netlify.app/")
      .configureLogging(LogLevel.Information)
      .build();

      connection.on("ReceiveMessage",(user,message)=>{
        // console.log("message received-- ",message);
        setMessages(messages=>[...messages, {user,message}]);
      })
      connection.onclose(e=>{
        setConnection();
        setMessages([]);
      })
      await connection.start();
      await connection.invoke("JoinRoom", {user,room});
      setConnection(connection);
      setUser(user);
  
    } catch (e) {
      console.log(e);
      
    }
  }

  const sendMessage=async(message)=>{
     try {
      await connection.invoke("SendMessage", message);
     } catch (e) {
      console.log(e);
     }
  }

  const closeConnection = async()=>{
    try{
      await connection.stop();
    }catch(e){
      console.log(e);
    }
  }


  return (
   <>
   <div className='main-container'>

   <h3>Chat</h3>
    {!connection ? 
<Lobby joinRoom={joinRoom}/>
    : <Chat messages={messages} sendMessage={sendMessage} closeConnection={closeConnection} user={user} />
    }
   </div>
   </>
  )
}

export default App
