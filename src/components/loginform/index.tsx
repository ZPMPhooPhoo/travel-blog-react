import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Routes, Route, Form } from 'react-router-dom';
import Styles from './style.module.css';

export default function Login(){
  const [input, setInput] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

function handleChange() {

  if (input.length === 0 && password.length === 0) {
    alert("User  name and password are required!")

  }
  else {
    navigate("/create")
  }
}
  return(
    
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <h1 className={Styles.title}>Welcome!</h1>

        <form action="" className={Styles.form}>
          <div className={Styles.inputgp}>
            <label >Username</label>
            <input type="text" id="username" name="name" value={input} onChange={(e) => setInput(e.target.value)} />
          </div>
          <div className={Styles.inputgp}>
            <label>Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className={Styles.btn} onClick={handleChange}>LogIn</button>
          <p className={Styles.homelink} >
            New User? <Link to="/" className={Styles.signUplink}>
              SingUP
            </Link>
          </p>
        </form>
      </div>
     
    </div>
  )
}



