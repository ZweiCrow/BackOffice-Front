import React, { useState } from 'react';
import "../utils/sass/formulaire.scss";


const AddContentForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${title} (${description}) ont été ajouté !`);
   
    setTitle('');
    setDescription('');
  };

  return (
    <section id='Ajout'>
        <form onSubmit={handleSubmit} id='add-content-form'>
        <div>
            <label htmlFor="title">Titre :</label>
            <input
            type="text"
            id='title'
            value={title}
            onChange={handleTitleChange}
            />
        </div>
        <div>
            <label htmlFor="description">Description :</label>
            <textarea
            id='description'
            value={description}
            onChange={handleDescriptionChange}
            />
        </div>
        <button type="submit">Ajouter</button>
        </form>
    </section>
  );
};

export default AddContentForm;