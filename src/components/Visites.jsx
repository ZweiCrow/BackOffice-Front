import React from 'react';
import "../utils/sass/visites.scss"

const Visites = () => {
  const target = sessionStorage.getItem("choix")

  const Lieux = [
    {
      _id: 1234567890,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 123456789,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 123456780,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 123456790,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 123456890,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
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
    {
      _id: 123456780,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 123456790,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 123456890,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
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
    {
      _id: 123456780,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 123456790,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
    {
      _id: 123456890,
      nom: "foyer",
      image: "/img/theatreMichel/images/Scene_depuis_loge.jpg"
    },
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
    },
  ]

  return (
    <div id='noScroll'>
      <div id='visites'>
        <h2>Lieux :</h2>
        <div id='scrollable'>
          {Lieux.map(()=>{
            return(
              <div className='tile'></div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Visites;