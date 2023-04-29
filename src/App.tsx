import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Pages/Home/Home";
import { Games } from "./components/Pages/Games/Games";
import { TopPlayedGamesbyTime } from "./components/Pages/TopGamesByPlayTime/TopPlayedGamesbyTime";
import { Navbar } from "./components/Header/Header";

import TopPlayedGamesByPlayers from "./components/Pages/TopGamesByPlayers/TopPlayedGamesByPlayers";

function App() {
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home/>} />
        
        <Route  path="/games" element={<Games/>} />
        <Route  path="/TopPlayedGames/TopPplayedByTime" element={<TopPlayedGamesbyTime/>} />
        <Route  path="/TopPlayedGames/TopPplayedByPlayers" element={<TopPlayedGamesByPlayers/>} />
      </Routes>
    
    </>
  );
}

export default App;
