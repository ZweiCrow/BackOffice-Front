import React from 'react';
import { Link } from 'react-router-dom';
import "../utils/sass/bouton.actualite.scss"

const BoutonActualite = ({id}) => {
    
   
  if (id.role === "add") {
    return (
      <Link to={"/"} className="addBouton">
        <img className="add" src="/img/icons/add.svg" alt="" />
      </Link>
    );
  }else{
    return (
      <Link to={"/"} id="bouton">
        <div className="name"><p>{id.nom}</p></div>
        <img className="actus" src={id.image} alt="" />
      </Link>
    );
  }
};

export default BoutonActualite;