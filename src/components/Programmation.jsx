import React from 'react';
import "../utils/sass/display.scss"
import BoutonProgrammation from './BoutonProgrammation';

const Programmation = () => {

  const Lieux = [
    {
      _id: 123467890,
      nom: "Nom de la piece",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 123567890,
      nom: "Nom de la piece",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 124567890,
      nom: "Nom de la piece",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 134567890,
      nom: "Nom de la piece",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 234567890,
      nom: "Nom de la piece",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 12567890,
      nom: "Nom de la piece",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },{
      _id: 1234567890,
      nom: "Nom de la piece",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 123456789,
      nom: "Nom de la piece",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 12590,
      nom: "Nom de la piece",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },{
      _id: 1234567,
      nom: "Nom de la piece",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
    {
      _id: 456789,
      nom: "Nom de la piece",
      image: "/img/theatreMichel/images/Sebastien_Azzopardi.jpg"
    },
  ]

  return (
    <div id='noScroll'>
      <div id='display'>
        <h2>Programmation :</h2>
        <div id='scrollable'>
          <BoutonProgrammation id={{role: "add"}}/>
          {Lieux.map((item)=>{
            return(
              <BoutonProgrammation id={item}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Programmation;