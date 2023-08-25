

import React, { useState } from 'react'

const Lobby = ({joinRoom}) => {

const [user, setUser] = useState();
const [room, setRoom] = useState();

const submit=(e)=>{
    e.preventDefault();
    joinRoom(user,room);

}
  return (
    <div>
        <div className='chatservice'>chat service</div>
         <form onSubmit={submit} className=" ">
              <input
                className=" "
                type="text"
                placeholder="name"
                onChange={(e)=>setUser(e.target.value)}
              /> <br />
              <input
                className=" "
                type="text"
                placeholder="room"
                onChange={(e)=>setRoom(e.target.value)}
              /> <br />
              <button type="submit" disabled={!user || !room}>
                ◀︎ Join
              </button>
            </form>

    </div>
  )
}

export default Lobby