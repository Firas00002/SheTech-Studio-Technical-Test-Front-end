import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionsCreator } from "../../../Redux";
import { StateType } from "../../../Redux/reducers/Reducer";
import { useEffect, useState} from "react";

import { Button, Col, Row } from "react-bootstrap";
import { TopPlayedGamesByPlaytimeCard } from "./TopPlayedGamesplayersCard";
import { Input } from "@mui/material";


export function TopPlayedGamesbyTime(){



  const dispatch = useDispatch();
  const {getGamesBytime} =bindActionCreators(ActionsCreator,dispatch)
   
   const {
    topgamesbytime 
   } = useSelector((state:Partial<StateType>) => state);
   useEffect(() => {
    getGamesBytime()
   }, [])
   type IQuery={
    genre?:string,
    platform?:string
  }
  const [query,setQuery]=useState<IQuery>();
  const queryChanged=(key:string,value:string)=>{
    setQuery({
      ...query,
      [key]:value
    })
  }
  const onSubmit=()=>{
    getGamesBytime(query?.genre,query?.platform);
  }

return <>



<Row md={4} xs={2} sm={2}>
        {topgamesbytime  && topgamesbytime .map((item:any) =>(
         < Col>
         
         <TopPlayedGamesByPlaytimeCard  {...item} />
        </Col>  ))}
        
      </Row>
      <Row className='input'>
        <Input  placeholder="genre" value={query?.genre} onChange={(e)=>queryChanged("genre",e.target.value)} />
        <Input placeholder="platform" value={query?.platform} onChange={(e)=>queryChanged("platform",e.target.value)}/>
        <Button style={{backgroundColor:' #34798a'}} onClick={onSubmit}>Submit</Button>
      </Row>
</>


    
    
}