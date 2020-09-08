import React from "react";
import "./JoinBlock.scss";
import socket from "../socket";

const JoinBlock = () => {
  return (
    <div className="box">
      <p>Login</p>
      <input type={"text"} placeholder={"Username"}></input>
      <input type={"password"} placeholder={"Password"}></input>
      <input type={"submit"} value={"Login"} />
    </div>
  );
};

export default JoinBlock;
