import React from 'react';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <ul>
        <li><a href="/">Théâtre du Palais Royal</a></li>
        <div className="white-line"></div>
        <li><a href="/visites">Visites</a></li>
        <div className="white-line"></div>
        <li><a href="/interviews">Interviews</a></li>
        <div className="white-line"></div>
        <li><a href="/actus">Actualités</a></li>
        <div className="white-line"></div>
        <li><a href="/programmation">Programmation</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;