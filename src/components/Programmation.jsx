import React, { useEffect, useState } from 'react';
import "../utils/sass/display.scss"
import BoutonProgrammation from './BoutonProgrammation';
import axios from 'axios';
import { URL } from '../Urls';

const Programmation = () => {
  const target = sessionStorage.getItem("choix")
  const [Data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        let data ;
        if (target === "Palais Royal") {
           data = await axios.get(URL.fetchPiecesPR)
        } else if (target === "Michel") {
           data = await axios.get(URL.fetchPiecesM)
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
        <h2>Programmation :</h2>
        <div id='scrollable'>
          <BoutonProgrammation id={{role: "add"}}/>
          {Data.map((item)=>{
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