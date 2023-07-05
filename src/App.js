import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/home" Component={Home} > 
          <Route path="log" Component={Login} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
