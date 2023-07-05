import React from "react";
import "../utils/sass/home.page.scss";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div id="container">
      <header id="header">
        <h2 id="h2">Back Office</h2>
      </header>

      <div id="user">
        <img src="/img/theatrePalaisRoyal/images/Benoit_Soles.jpg" alt="" />
        <p>Nom de la personne</p>
      </div>

      <div id="sidebar">
        <ul>
          <li> <a href="/">Théâtre du Palais Royal</a> </li>
          <img className="divider" src="/img/line-white.png" alt="" />
          <li> <a href="/visites">Visites</a> </li>
          <img className="divider" src="/img/line-white.png" alt="" />
          <li> <a href="/interviews">Interviews</a> </li>
          <img className="divider" src="/img/line-white.png" alt="" />
          <li> <a href="/actus">Actualités</a> </li>
          <img className="divider" src="/img/line-white.png" alt="" />
          <li> <a href="/programmation">Programmation</a> </li>
        </ul>
      </div>

      <div id="outlet">
        <Outlet />
      </div>

      <img id="background" src="/img/login-background.jpg" alt="background"/>
    </div>
  );
}

export default Home;
