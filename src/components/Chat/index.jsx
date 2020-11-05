import React from "react";
import socket from "../../socket";

import "./Chat.scss";

function Chat({ users, messages, userName, roomId, onAddMessage }) {

  const [messageValue, setMessageValue] = React.useState('');
  const messagesRef = React.useRef(null);

  const onSendMessage = () => {
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId,
      text: messageValue,
    });
    onAddMessage({ userName, text: messageValue });
    setMessageValue('');
  };

  // React.useEffect(() => {
  //   messagesRef.current.scrollTo(0, 99999);
  // }, [messages]);

  return (
    <div className="chat">
      <div className="chat-users">
        Комната: <b>{roomId}</b>
        <hr />
        <b>Онлайн ({users.length}):</b>
        <ul>
          {users.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="chat-messages">
        <div className="messages">
          {messages.map((message) => (
            <div className="message">
              <p>{message.text}</p>
              <div>
                <span>{message.userName}</span>
              </div>
            </div>
          ))}
        </div>
        <form>
          <textarea className="form-control" rows="3" value={messageValue} onChange={(e) => {
            setMessageValue(e.target.value)
          }}></textarea>
          <button type="button" onClick={onSendMessage} className="btn btn-primary">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
