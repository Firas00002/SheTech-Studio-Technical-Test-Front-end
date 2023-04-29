import { useState ,useEffect} from "react";
import { Col, Row } from "react-bootstrap";
import { GamesList } from "./GamesList";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../Redux/reducers/Reducer";
import { bindActionCreators } from "redux";
import { ActionsCreator } from "../../../Redux";
export function Games() {
  
    
    
  
  const dispatch = useDispatch();
 const {getGames} =bindActionCreators(ActionsCreator,dispatch)
  
  const {
    games 
  } = useSelector((state:Partial<StateType>) => state);
  useEffect(() => {
    getGames()
  }, [])
  return (
    
    <>
      

      <Row md={4} xs={2} sm={2}>
        {games && games.map((item:any) =>(
         < Col>
         
         <GamesList key={item.userId._id} {...item} />
        </Col>  ))}
        
      </Row>
    </>
  );
}
