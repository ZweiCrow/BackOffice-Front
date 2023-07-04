import React from "react";
import Sidebar from "../component/nav";
import "../utils/sass/home.page.scss"

function Home(){
    return(
        <>
        <header id="header">
            <main>
                <h2 id="h2">Back Office</h2>
            </main>
        </header>
            <Sidebar/>
           <img src="/img/login-background.jpg" alt="image"/>
        </>
    );
};

export default Home;