import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import "../utils/sass/formulaire.acteurs.scss"
import axios from 'axios';
import { URL } from '../Urls';

const ActeursForm = () => {
  const target = sessionStorage.getItem("choix")
  const navigate = useNavigate();
  const location = useLocation()
  const { from } = location.state
  const [actor, setActor] = useState([])
  const [pieces, setPieces] = useState([])
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [biography, setBiography] = useState("")
  const [theatre, setTheatre] = useState("")
  const [imagePath, setImagePath] = useState("")
  const [plays, setPlays] = useState([])


  const handlePhotoChange = (e) => {
    const data = new FormData();
    setImagePath(e.target.files[0].name)
    data.append('upload-button', e.target.files[0]);
  };

  const BackOff = () => {
    setTimeout(()=>{
      navigate('/home/Acteurs');
    }, 100)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.delete(URL.suppActeur + location.state.id)
    BackOff()
  }

  const handleSubmitAdd = (e) => {
    e.preventDefault()
    axios.post(URL.postActeur, {
      name: name,
      role: role,
      biography: biography,
      imagePath: `acteurs/${imagePath}`,
      videoPath: `test/${name.replace(/ /g,"_")}.mp4`,
      theatre: theatre,
      playIds: plays,
    });
    BackOff()
  }
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const {data} = await axios.get(URL.fetchActorsById+location.state.id)
        setActor(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
    const fetchPieces = async () => {
      try {
        const {data} = await axios.get(URL.fetchPieces)
        setPieces(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPieces()
  }, [])

  if (from === "add") {
    return(
      <div id='noScroll'>
      <div id='display'>
        <h2>Acteurs :</h2>
        <div id='scrollable'>
          <form id='form' onSubmit={handleSubmitAdd}>
            <div className='contain'>
              <label htmlFor="name"> Nom </label>
              <input type="text" id='name' onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className='contain'>
              <label htmlFor="theatre"> Théâtre </label>
              <select name="theatre" id="theatre" onChange={(e)=>setTheatre(e.target.value)}>
                <option value="Palais Royal">Palais Royal</option>
                <option value="Michel">Théâtre Michel</option>
              </select>
            </div>
            <div className='contain bio'>
              <label htmlFor="biography"> Biographie </label>
              <textarea type="text" id='biography' onChange={(e)=>{setBiography(e.target.value)}}/>
            </div>
            <div className='contain'>
              <label htmlFor="role"> Role </label>
              <input type="text" id='role' onChange={(e)=>{setRole(e.target.value)}}/>
            </div>
            <div className='contain'>
              <label htmlFor="upload-button"> Photo </label>
              <input type="file" id='upload-button' name='upload-button' onChange={handlePhotoChange}/>
            </div>
            <div className='contain piece'>
              <label htmlFor="piece"> Programmation </label>
              <select name="piece" id="piece" onChange={(e)=>{setPlays([e.target.value])}}>
                {pieces.map((item)=>{
                  return(
                    <option value={item._id} key={item._id}>{item.name}</option>
                  )
                })}
              </select>
            </div>
            <button>Créer</button>
          </form>
        </div>
      </div>
    </div>
    )
  }

  if (from === "up-supp") {
    return(
      <div id='noScroll'>
      <div id='display'>
        <h2>Acteurs :</h2>
        <div id='scrollable'>
          <form id='form' onSubmit={handleSubmit}>
            <div className='contain'>
              <label htmlFor="name"> Nom </label>
              <input type="text" id='name' value={actor.name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className='contain'>
              <label htmlFor="theatre"> Théâtre </label>
              <select name="theatre" id="theatre" defaultValue={(target === "Michel")? "Michel" : "Palais Royal"} onChange={(e)=>setTheatre(e.target.value)}>
                <option value="Palais Royal">Palais Royal</option>
                <option value="Michel">Théâtre Michel</option>
              </select>
            </div>
            <div className='contain bio'>
              <label htmlFor="biography"> Biographie </label>
              <textarea type="text" id='biography' value={actor.biography} onChange={(e)=>{setBiography(e.target.value)}}/>
            </div>
            <div className='contain'>
              <label htmlFor="role"> Role </label>
              <input type="text" id='role' value={actor.role} onChange={(e)=>{setRole(e.target.value)}}/>
            </div>
            <div className='contain'>
              <label htmlFor="imagePath"> Photo </label>
              <input type="text" id='imagePath'/>
            </div>
            <div className='contain piece'>
              <label htmlFor="piece"> Programmation </label>
              <select name="piece" id="piece" onChange={(e)=>{setPlays([e.target.value])}}>
                {pieces.map((item)=>{
                  return(
                    <option value={item._id} key={item._id}>{item.name}</option>
                  )
                })}
              </select>
            </div>
            <button>Supprimer</button>
          </form>
        </div>
      </div>
    </div>
    )
  }
};

export default ActeursForm;