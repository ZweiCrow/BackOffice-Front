import React from "react";
import "../utils/sass/home.page.scss";
import { Link, Outlet } from "react-router-dom";

function Home() {
  const target = sessionStorage.getItem("choix")
  const user = localStorage.getItem('id')

  if (user){  
  return (
    <div id="container">
      <header id="header">
        <Link to={"/"}><h1 id="h2">Back Office</h1></Link>
      </header>

      <div id="user">
        <img src="/img/theatrePalaisRoyal/images/Benoit_Soles.jpg" alt="" />
        <p>Nom de la personne</p>
      </div>

      <div id="sidebar">
        <ul>
          <li> <p>{(target === "Palais Royal") ? "Théatre du Palais Royal" : "Théatre Michel"}</p> </li>

          <img className="divider" style={{width: "80%", marginTop: "-5px"}} src="/img/line-white.png" alt="" />

          <li> <Link to="/home/Visites">Visites</Link> </li>

          <img className="divider" src="/img/line-white.png" alt="" />

          <li> <Link to="/home/Acteurs">Acteurs</Link> </li>

          <img className="divider" src="/img/line-white.png" alt="" />

          <li> <Link to="/home/Actualite">Actualités</Link> </li>

          <img className="divider" src="/img/line-white.png" alt="" />

          <li> <Link to="/home/Programmation">Programmation</Link> </li>

        </ul>
      </div>

      <div id="outlet">
        <Outlet />
      </div>

      <img id="background" src={(target === "Palais Royal") ? "/img/backgroundPR.jpg" : "/img/backgroundM.jpg"} alt="background"/>
    </div>
  );}
}

export default Home;
