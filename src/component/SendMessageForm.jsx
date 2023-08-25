import React,{useState} from 'react'

const SendMessageForm = ({sendMessage}) => {

const [message, setMessage] = useState("");

const submit=(e)=>{
    e.preventDefault();
        sendMessage(message);
        setMessage("");

}
  return (
    <div>
         <form onSubmit={submit} className="sendForm">
        
              <input
                className=" "
                type="text"
                value={message}
                placeholder="message..."
                onChange={(e)=>setMessage(e.target.value)}
              /> <br />
              <button type="submit" disabled={!message}>
               send
              </button>
            </form>


    </div>
  )
}

export default SendMessageForm