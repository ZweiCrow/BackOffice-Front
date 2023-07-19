import React, { useState } from 'react';
import "../utils/sass/login.scss"

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  // const [adminList, setAdminList] = useState([]);
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const loginRegex = /.{5,}/
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginRegex.test(login) ) {
      console.log("login okay");
      const message = document.querySelector("#errLogMes")
      message.style.opacity = 0;
    } else {
      console.log("login false");
      const message = document.querySelector("#errLogMes")
      message.style.opacity = 1;
    }

    if (passwordRegex.test(password)) {
      console.log("password okay");
      const message = document.querySelector("#errPasMes")
      message.style.opacity = 0;
    } else {
      console.log("password false");
      const message = document.querySelector("#errPasMes")
      message.style.opacity = 1;
    }
    
    if(loginRegex.test(login) && passwordRegex.test(password)){
      localStorage.setItem("id", 1234567890)
      
    }
  }

  return (
    <section id="Login">
      <form onSubmit={handleSubmit} id="form">
        <div>
          <label htmlFor="dashLogin">Login</label>
          <input
            type="text"
            name="dashLogin"
            id="dashLogin"
            placeholder="Enter your login ..."
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
        </div>
        <div className="errorText" id='errLogMes'>Mauvais identifiant</div>
        <div>
          <label htmlFor="dashPass">Password</label>
          <input
            type="text"
            name="dashPass"
            id="dashPass"
            placeholder="Enter your password ..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="errorText" id='errPasMes'>Mauvais mot de passe (8 charactères, Minuscule, Majuscule, Chiffre et Charactère spéciaux)</div>
        <button>LOGIN</button>
      </form>
      <img src="/img/login-background.jpg" alt="background" />
    </section>
  );
};

export default Login;