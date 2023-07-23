import React, { useEffect, useState } from 'react';
import "../utils/sass/choix.scss"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { URL } from '../Urls';

const Choix = () => {
  const navigate = useNavigate();
  // const target = sessionStorage.getItem("choix")
  const user = Cookies.get('TokenForDNSUser')
  const [adminList, setAdminList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let found = "no"

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const {data} = await axios.get(URL.fetchUsers)
        setAdminList(data)
        setLoading(false);
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const BackOff = () => {
    setTimeout(()=>{
      navigate('/');
    }, 100)
  }

  const Nav = (target) => {
    sessionStorage.setItem("choix", target)
  }

  if (isLoading) { // Important
    return <div className="App">Loading...</div>;
  }

  for (const users of adminList) {
    if (users._id === user) {
      found = "ok"
    }
  }

  if (found === "ok") {
    return (
      <div id="container">
        <header id="header">
          <h2 id="h2">Choix du Théatre</h2>
        </header>
  
        <div id="user">
          <img src="/img/theatrePalaisRoyal/images/Benoit_Soles.jpg" alt="" />
          <p>Nom de la personne</p>
        </div>
  
        <div id="choix">
          <Link className="option" to="/home" onClick={()=>{Nav("Palais Royal")}}>
            <div className='blur'></div>
            <img src="/img/backgroundPR.jpg" alt="" />
          </Link>
          <Link className="option" to="/home" onClick={()=>{Nav("Michel")}}>
            <div className='blur'></div>
            <img src="/img/backgroundM.jpg" alt="" />
          </Link>
        </div>
      </div>
    );
  } else {
    BackOff()
  }
};

export default Choix;