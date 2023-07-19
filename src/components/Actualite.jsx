import React from 'react';
import "../utils/sass/display.scss"
import BoutonActualite from './BoutonActualite';

const Actualite = () => {
  const target = sessionStorage.getItem("choix")

  const Lieux = [
  ]

  return (
    <div id='noScroll'>
      <div id='display'>
        <h2>Actualités :</h2>
        <div id='scrollable'>
            <BoutonActualite id={{role: "add"}}/>
            {Lieux.map((item)=>{
              return(
                <BoutonActualite id={{item}}/>
              )
          })}
        </div>
      </div>
    </div>
  );
};

export default Actualite;