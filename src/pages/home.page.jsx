import React from "react";
import "../utils/sass/home.page.scss";
import { Link, Outlet } from "react-router-dom";

function Home() {
  const target = sessionStorage.getItem("choix")

  
  return (
    <div id="container">
      <header id="header">
        <h1 id="h2">{(target === "Palais Royal") ? "Théatre du Palais Royal" : "Théatre Michel"}</h1>
      </header>

      <div id="user">
        <img src="/img/theatrePalaisRoyal/images/Benoit_Soles.jpg" alt="" />
        <p>Nom de la personne</p>
      </div>

      <div id="sidebar">
        <ul>
          <li> <Link to="/">Théâtre du Palais Royal</Link> </li>
          <img className="divider" src="/img/line-white.png" alt="" />
          <li> <Link to="/home/Visites">Visites</Link> </li>
          <img className="divider" src="/img/line-white.png" alt="" />
          <li> <Link to="/interviews">Interviews</Link> </li>
          <img className="divider" src="/img/line-white.png" alt="" />
          <li> <Link to="/actus">Actualités</Link> </li>
          <img className="divider" src="/img/line-white.png" alt="" />
          <li> <Link to="/programmation">Programmation</Link> </li>
        </ul>
      </div>

      <div id="outlet">
        <Outlet />
      </div>

      <img id="background" src={(target === "Palais Royal") ? "/img/backgroundPR.jpg" : "/img/backgroundM.jpg"} alt="background"/>
    </div>
  );
}

export default Home;
