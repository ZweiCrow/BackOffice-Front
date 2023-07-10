import React from 'react';
import "../utils/sass/display.scss"
import BoutonActeurs from './BoutonActeurs';

const Acteurs = () => {
  const target = sessionStorage.getItem("choix")

  const Lieux = [
    {
      _id: 123467890,
      nom: "Sebastien Azzopardi",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 123567890,
      nom: "Sebastien Azzopardi",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 124567890,
      nom: "Sebastien Azzopardi",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 134567890,
      nom: "Sebastien Azzopardi",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 234567890,
      nom: "Sebastien Azzopardi",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 12567890,
      nom: "Sebastien Azzopardi",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },{
      _id: 1234567890,
      nom: "Sebastien Azzopardi",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 123456789,
      nom: "Sebastien Azzopardi",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 12590,
      nom: "Sebastien Azzopardi",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },{
      _id: 1234567,
      nom: "Sebastien Azzopardi",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 456789,
      nom: "Sebastien Azzopardi",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
  ]

  return (
    <div id='noScroll'>
      <div id='display'>
        <h2>Acteurs :</h2>
        <div id='scrollable'>
          <BoutonActeurs id={{role: "add"}}/>
          {Lieux.map((item)=>{
            return(
              <BoutonActeurs id={item}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Acteurs;