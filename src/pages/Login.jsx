import React, { useState } from 'react';
import "../utils/sass/login.scss"
import Cookies from 'js-cookie'; // https://www.npmjs.com/package/js-cookie
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const loginRegex = /.{5,}/
  const navigate = useNavigate();

  const GoOn = () => {
    setTimeout(()=>{
      navigate('/home');
    }, 100)
  }

  const VerifRegEx = () => {
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
      VerifUser()
    }
  }

  const VerifUser = () => {
    // post vers le back end avec login et mdp qui return l'id dans la response
    // localStorage.setItem("TokenForDNSUser", 1234567890)
    Cookies.set('TokenForDNSUser', '64b2d6a2fb83c925e067f6b7', { expires: 1 }) // remplacer par l'id de l'utilisateur
    GoOn()
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    VerifRegEx()
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