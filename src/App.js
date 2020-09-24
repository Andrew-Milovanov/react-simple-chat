import React, { useReducer } from "react";
import socket from "./socket";

import JoinBlock from "./components/JoinBlock";
import reducer from "./reducer";
import Chat from "./components/Chat/Chat";

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
  });

  const onLogin = (obj) => {
    dispatch({ type: "JOINED", payload: obj });
    socket.emit("ROOM:JOIN", obj);
  };

  React.useEffect(() => {
    socket.on("ROOM:JOINED", (users) => {
      console.log("new people", users);
    });
  }, []);

  return (
    <div className={"wrapper"}>
      {!state.joined ? <JoinBlock onLogin={onLogin} /> : <Chat />}
    </div>
  );
}

export default App;
