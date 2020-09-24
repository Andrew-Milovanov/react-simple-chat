import React from "react";
import socket from "../../socket";

import "./Chat.scss";

function Chat({ users, messages, userName, roomId, onAddMessage }) {
  return (
    <div className="chat">
      <div className="chat-users">
        Комната: <b>{roomId}</b>
        <hr />
        <b>Онлайн ():</b>
        <ul>
          {/* {users.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))} */}
        </ul>
      </div>
      <div className="chat-messages">
        <div className="messages">
          {/* {messages.map((message) => (
            <div className="message">
              <p>{message.text}</p>
              <div>
                <span>{message.userName}</span>
              </div>
            </div>
          ))} */}
        </div>
        <form>
          <textarea className="form-control" rows="3"></textarea>
          <button type="button" className="btn btn-primary">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
