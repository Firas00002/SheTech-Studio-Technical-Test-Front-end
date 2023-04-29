import React from 'react'

const TopPlayedGamesByPlayersCard = (item:any) => {
  return (
    <>
    
    <div className="games-list">
      
  <div className="game-card">
    
    <div className="game-details">
      <h2 className="game-title">Game : {item._id}</h2>
      <p className="game-genre">Genre : {item.genre}</p>
      <p className="game-platform">Platform : {item.platforms.map(((el:any)=><li>{el}</li>))}</p>
      <p className="game-genre">PlayTime : {item.playTime} hours</p>
      <p className="game-platform">Totale Players : {item.userIds} </p>
      
    </div>
  </div>
  
</div>
    </>
  )
}

export default TopPlayedGamesByPlayersCard
