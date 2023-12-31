import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home.page";
import Choix from "./pages/Choix";
import Visites from "./components/Visites";
import Acteurs from "./components/Acteurs";
import Actualite from "./components/Actualite";
import Programmation from "./components/Programmation";
import AddContentForm from "./components/formulaire";
import ActeursForm from "./components/ActeursForm";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" Component={Login} />

        <Route path="/choix" Component={Choix} />
        <Route path="/home" Component={Home} > 
          <Route path="Visites" Component={Visites} />
          <Route path="Acteurs" Component={Acteurs} />
          <Route path="Actualite" Component={Actualite} />
          <Route path="Programmation" Component={Programmation} />
          <Route path="Formulaire" Component={AddContentForm} />
          <Route path="ActeursForm" Component={ActeursForm} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
