import React, { useEffect, useState } from 'react';
import "../utils/sass/display.scss"
import BoutonActualite from './BoutonActualite';
import axios from 'axios';
import { URL } from '../Urls';

const Actualite = () => {
  const target = sessionStorage.getItem("choix")
  const [Data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        let data ;
        if (target === "Palais Royal") {
           data = await axios.get(URL.fetchActualitePR)
        } else if (target === "Michel") {
           data = await axios.get(URL.fetchActualiteM)
        }
        // console.log(data.data);
        setData(data.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, [])

  return (
    <div id='noScroll'>
      <div id='display'>
        <h2>Actualités :</h2>
        <div id='scrollable'>
            <BoutonActualite id={{role: "add"}}/>
            {Data.map((item)=>{
              return(
                <BoutonActualite id={item}/>
              )
          })}
        </div>
      </div>
    </div>
  );
};

export default Actualite;