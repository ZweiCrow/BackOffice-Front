import React from 'react';
import "../utils/sass/display.scss"
import BoutonVisite from './BoutonVisite';


const Visites = () => {
  const target = sessionStorage.getItem("choix")

  const Lieux = [
    {
      _id: 123457890,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 123467890,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 123567890,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 124567890,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 134567890,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 234567890,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 12567890,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },{
      _id: 1234567890,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 123456789,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
  ]

  return (
    <div id='noScroll'>
      <div id='display'>
        <h2>Lieux :</h2>
        <div id='scrollable'>
        <BoutonVisite id={{role: "add"}}/>
          {Lieux.map((item)=>{
            return(
              <BoutonVisite id={{item}}/>
              
              
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Visites;