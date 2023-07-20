import React from 'react';
import { Link } from 'react-router-dom';
import "../utils/sass/bouton.visite.scss"
import AddContentForm from './formulaire.jsx';

const BoutonVisite = ({id}) => {
  
   
  if (id.role === "add") {
    return (
      <Link to="/home/formulaire" className="addBouton">
        <img className="add" src="/img/icons/add.svg" alt="" />
        
      </Link>
    );
  }else{
    return (
      <Link to={"/"} id="bouton">
        <div className="name"><p>{id.name}</p></div>
        <img className="piece" src={"https://theatre.startwin.fr/" + id.imagePath} alt="" />
      </Link>
    );
  }
};

export default BoutonVisite;