import React, { useEffect, useState } from 'react';
import "../utils/sass/display.scss"
import BoutonVisite from './BoutonVisite';
import axios from 'axios';
import { URL } from '../Urls';


const Visites = () => {
  const target = sessionStorage.getItem("choix")
  const [Lieux, setLieux] = useState([])
  

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const {data} = await axios.get(URL.fetchActorsPR, { crossdomain: true })
        console.log(data);
        // setActeurs(data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, [])

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