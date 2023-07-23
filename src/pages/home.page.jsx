import React, { useEffect, useState } from "react";
import "../utils/sass/home.page.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { URL } from '../Urls';


function Home() {
  const navigate = useNavigate();
  const target = sessionStorage.getItem("choix")
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
          <Link to={"/choix"}><h1 id="h2">Back Office</h1></Link>
        </header>
  
        <div id="user">
          <img src="/img/theatrePalaisRoyal/images/Benoit_Soles.jpg" alt="" />
          <p>Nom de la personne</p>
        </div>
  
        <div id="sidebar">
          <ul>
            <li> <p>{(target === "Palais Royal") ? "Théatre du Palais Royal" : "Théatre Michel"}</p> </li>
  
            <img className="divider" style={{width: "80%", marginTop: "-5px"}} src="/img/line-white.png" alt="" />
  
            <li> <Link to="/home/Visites">Visites</Link> </li>
  
            <img className="divider" src="/img/line-white.png" alt="" />
  
            <li> <Link to="/home/Acteurs">Acteurs</Link> </li>
  
            <img className="divider" src="/img/line-white.png" alt="" />
  
            <li> <Link to="/home/Actualite">Actualités</Link> </li>
  
            <img className="divider" src="/img/line-white.png" alt="" />
  
            <li> <Link to="/home/Programmation">Programmation</Link> </li>
  
          </ul>
        </div>
  
        <div id="outlet">
          <Outlet />
        </div>
  
        <img id="background" src={(target === "Palais Royal") ? "/img/backgroundPR.jpg" : "/img/backgroundM.jpg"} alt="background"/>
      </div>
    );
  } else {
    BackOff()
  }
}

export default Home;
