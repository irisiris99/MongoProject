import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  const register = () => {
    Axios.post("http://localhost3000/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response: any) => {
      console.log(response);
    });
  };

  return (
    <div>
      <div className="registration">
        <h1>Ragistration</h1>
        <label>Username</label>
        <input 
        type="text" 
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }}/>
        <label>Password</label>
        <input 
        type="text" 
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }}/>
        <button onClick={register}> Register </button>
      </div>
      <div className="login">
        <h1> Login </h1>
        <input type="text" placeholder="Username..." />
        <input type="password" placeholder="Password..." />
        <button> Register </button>
      </div>
    </div>
  );
}

export default App;
