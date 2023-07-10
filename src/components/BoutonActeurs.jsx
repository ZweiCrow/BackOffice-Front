import React from "react";
import { Link } from "react-router-dom";
import "../utils/sass/bouton.acteur.scss";

const BoutonActeurs = ({ id }) => {

  if (id.role === "add") {
    return (
      <Link to={"/"} className="addButton">
        <img className="add" src="/img/icons/add.svg" alt="" />
      </Link>
    );
  }else{
    return (
      <Link to={"/"} id="BoutonActeurs">
        <div className="name"><p>{id.nom}</p></div>
        <img className="face" src={id.image} alt="" />
      </Link>
    );
  }
};

export default BoutonActeurs;
