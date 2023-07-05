import React, { useState } from 'react';
import "../utils/sass/login.scss"

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  // const [adminList, setAdminList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${login} (${password}) veut se connecter !`);
  } 

  return (
    <section id='Login'>
      <form onSubmit={handleSubmit} id='form'>
        <div>
          <label htmlFor="dashLogin">Login</label>
          <input type="text" name="dashLogin" id="dashLogin" placeholder='Enter your login ...' onChange={(e)=>{setLogin(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="dashPass">Password</label>
          <input type="password" name="dashPass" id="dashPass" placeholder='Enter your password ...' onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button>LOGIN</button>
      </form>
      <img src="/img/login-background.jpg" alt="background" />
    </section>
  );
};

export default Login;