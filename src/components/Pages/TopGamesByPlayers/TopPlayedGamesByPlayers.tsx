



import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { StateType } from '../../../Redux/reducers/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionsCreator } from '../../../Redux';
import {useEffect} from 'react'
import TopPlayedGamesByPlayersCard from './TopPlayedGamesplayersCard';
import { Input } from '@mui/material';
const TopPlayedGamesByPlayers = () => {

  const dispatch = useDispatch();
  const {getGamesByPlayers} =bindActionCreators(ActionsCreator,dispatch)
   
   const {
    topgamesbyplayers
   } = useSelector((state:Partial<StateType>) => state);
   useEffect(() => {
    getGamesByPlayers()
   }, [])
   type IQuery={
    genre?:string,
    platform?:string
  }
  const [query,setQuery]=useState<IQuery>();
  const queryChanged=(key:string,value:string)=>{
    setQuery({
      ...query,
      [key]:value,
      
    })
    
  }
  const onSubmit=(e:any)=>{
    getGamesByPlayers(query?.genre,query?.platform);
    
  }
  return (
    <>

    
    <Row md={4} xs={2} sm={2}>
        {topgamesbyplayers  && topgamesbyplayers .map((item:any) =>(
         < Col>
         
         <TopPlayedGamesByPlayersCard  {...item} />
        </Col>  ))}
        
      </Row>
      
      <Row className='input'>
        <Input  placeholder="genre" value={query?.genre} onChange={(e)=>queryChanged("genre",e.target.value)} />
        <Input placeholder="platform" value={query?.platform} onChange={(e)=>queryChanged("platform",e.target.value)}/>
        <Button style={{backgroundColor:' #34798a'}} onClick={onSubmit}>Submit</Button>
      </Row>
      
      </>
      
  )
}

export default TopPlayedGamesByPlayers