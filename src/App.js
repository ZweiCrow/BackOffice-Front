import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home.page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route index element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
