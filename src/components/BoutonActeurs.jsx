import React from "react";
import { Link } from "react-router-dom";
import "../utils/sass/bouton.acteur.scss";

const BoutonActeurs = ({ id }) => {

  if (id.role === "add") {
    return (
      <Link to="/home/formulaire" className="addButton">
        <img className="add" src="/img/icons/add.svg" alt="" />
      </Link>
    );
  }else{
    console.log(id);
    return (
      <Link to={"/"} id="BoutonActeurs">
        <div className="name"><p>{id.name}</p></div>
        <img className="face" src={"https://theatre.startwin.fr/" + id.imagePath} alt="" />
      </Link>
    );
  }
};

export default BoutonActeurs;
