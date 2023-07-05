import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home.page";
import Choix from "./pages/Choix";
import Visites from "./components/Visites";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" Component={Login} /> */}
        <Route path="/" Component={Choix} />
        <Route path="/home" Component={Home} > 
          <Route path="Visites" Component={Visites} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
