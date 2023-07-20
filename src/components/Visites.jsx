import React, { useEffect, useState } from 'react';
import "../utils/sass/display.scss"
import BoutonVisite from './BoutonVisite';
import axios from 'axios';
import { URL } from '../Urls';


const Visites = () => {
  const target = sessionStorage.getItem("choix")
  const [Data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        let data ;
        if (target === "Palais Royal") {
           data = await axios.get(URL.fetchLieuxPR)
        } else if (target === "Michel") {
           data = await axios.get(URL.fetchLieuxM)
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
        <h2>Lieux :</h2>
        <div id='scrollable'>
        <BoutonVisite id={{role: "add"}}/>
          {Data.map((item)=>{
            return(
              <BoutonVisite id={item}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Visites;