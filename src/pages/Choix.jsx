import React from 'react';
import "../utils/sass/choix.scss"
import { Link } from 'react-router-dom';

const Choix = () => {

  const Nav = (target) => {
    sessionStorage.setItem("choix", target)
  }

  return (
    <div id="container">
      <header id="header">
        <h2 id="h2">Choix du Théatre</h2>
      </header>

      <div id="user">
        <img src="/img/theatrePalaisRoyal/images/Benoit_Soles.jpg" alt="" />
        <p>Nom de la personne</p>
      </div>

      <div id="choix">
        <Link className="option" to="/home" onClick={()=>{Nav("Palais Royal")}}>
          <div className='blur'></div>
          <img src="/img/backgroundPR.jpg" alt="" />
        </Link>
        <Link className="option" to="/home" onClick={()=>{Nav("Michel")}}>
          <div className='blur'></div>
          <img src="/img/backgroundM.jpg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Choix;