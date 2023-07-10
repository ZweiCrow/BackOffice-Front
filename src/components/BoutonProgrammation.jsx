import React from 'react';
import { Link } from 'react-router-dom';
import "../utils/sass/bouton.programation.scss";

const BoutonProgrammation = ({id}) => {

  if (id.role === "add") {
    return (
      <Link to={"/"} className="addButton">
        <img className="add" src="/img/icons/add.svg" alt="" />
      </Link>
    );
  }else{
    return (
      <Link to={"/"} id="Bouton">
        <div className="name"><p>{id.nom}</p></div>
        <img className="affiche" src={id.image} alt="" />
      </Link>
    );
  }
};

export default BoutonProgrammation;