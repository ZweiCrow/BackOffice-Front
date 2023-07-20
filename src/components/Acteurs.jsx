import React, { useEffect, useState } from 'react';
import "../utils/sass/display.scss"
import BoutonActeurs from './BoutonActeurs';
import axios from 'axios';
import { URL } from '../Urls';

const Acteurs = () => {
  const target = sessionStorage.getItem("choix")
  const [Data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        let data ;
        if (target === "Palais Royal") {
           data = await axios.get(URL.fetchActorsPR)
        } else if (target === "Michel") {
           data = await axios.get(URL.fetchActorsM)
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
        <h2>Acteurs :</h2>
        <div id='scrollable'>
          <BoutonActeurs id={{role: "add"}}/>
          {Data.map((item)=>{
            return(
              <BoutonActeurs id={item} key={item._id}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Acteurs;