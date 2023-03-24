import React, { useState } from "react";
import Input from "../../components/CRUD/input";
import ListMsg, { item } from "./bloglist"

export default function CRUD() {
  const [lists, setLists] = useState<Array<item>>([
    { id: 1, name: "john", email: "ea@gmail", msg: "dfe" }

  ]);

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const sendLists = () => {
    if (username === "" && email === "" && msg === "") {
      alert("type your msg!");
    }

    else {
      console.log(...lists);

      setLists([...lists, { name: username, email: email, msg: msg, id: setLists.length + 1 }])
      setUsername("")
      setEmail("")
      setMsg("")

    }
  };
  return (

    <div id="contact">
      <div className="l-wrap-outer">
        <div className="l-wrap-inner">
          <div className="content">
            <div className="content-title">
              <h3>Create Blog</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod incididunt ut labore
              </p>
              <hr />
            </div>
            <div className="contact-form">
              <Input
                label={"Title"}
                value={username}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => {
                  setUsername(e.target.value);
                }}
                placeholder={"Enter Your Name"}
              />
              <Input
                label={"Context"}
                placeholder={"Enter Your Email"}
                value={email}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                label={"Message"}
                placeholder={"Enter Your Message"}
                value={msg}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => {
                  setMsg(e.target.value);
                }}
              />

              <button onClick={sendLists} className="send-btn">
                Add Blog
              </button>
            </div>
            <div className="msgLists">
              {lists.map((item, index) => {
                return <ListMsg key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





