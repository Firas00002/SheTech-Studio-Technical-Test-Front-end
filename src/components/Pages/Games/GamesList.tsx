
import './gamelist.css'
import {  useSelector } from "react-redux";
import { StateType } from "../../../Redux/reducers/Reducer";





export function GamesList(item:any) {
  
  
    return (
        

        <div className="games-list">
  <div className="game-card">
    
    <div className="game-details">
      <h2 className="game-title">Game : {item.game}</h2>
      <p className="game-genre">Genre : {item.genre}</p>
      <p className="game-platform">Platform : {item.platforms.map(((el:any)=><li>{el}</li>))}</p>
      <p className="game-genre">PlayTime : {item.playTime}</p>
      <p className="game-platform">Player : {item.userId}</p>
      
    </div>
  </div>
  
</div>
    )
}