import React, { useEffect, useRef } from "react";

const MessageContainer = ({ messages,user }) => {
  const messageRef = useRef();

  useEffect(() => {
    if (messageRef && messageRef.current) {
      const { scrollHeight, clientHeight } = messageRef.current;
      messageRef.current.scrollTo({
        left: 0,
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="message-container" ref={messageRef}>
      {messages.map((m, index) => (
        <div key={index} className={`user-message ${user===m.user?"right":"left"}`}>
          <div className="message">
            <div className="user">{m.user}</div>
            {m.message}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageContainer;
