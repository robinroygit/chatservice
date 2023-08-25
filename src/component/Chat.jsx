import React from 'react'
import MessageContainer from './MessageContainer'
import SendMessageForm from './SendMessageForm'

const Chat = ({messages,sendMessage,closeConnection,user}) => {
  return (
    <div className='chat'>

        <button className='btn' onClick={()=>closeConnection()}>Leave Room</button>


    <MessageContainer messages={messages} user={user} />
    <div className='sendmessage'>
    <SendMessageForm sendMessage={sendMessage} />
    </div>
    </div>
  )
}

export default Chat