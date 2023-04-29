import React from 'react'

import axios from 'axios';

import {Dispatch} from 'redux'
import { ActionType } from '../actionTypes/actionTypesEnum';
import {Actions} from '../actionTypes/gamesActionTypes'

export const getGames = () => async (dispatch:Dispatch<Actions>) => {

    
      dispatch({ type: ActionType.GET_ALLGAMES });
    try {
      
  
      const { data } = await axios.get("/game/");
  
      dispatch({
        type: ActionType.GET_ALLGAMES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.GET_ALLGAMES_FAIL,
        
      });
    }
  };

  export const getGamesBytime =
  (genre?: string, platform?: string) =>
  async (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionType.GET_ALLGAMESBYTIME });
    try {
      const query = { params: {} };
      if (genre) {
        Object.assign(query.params, { genre });
      }
      if (platform) {
        Object.assign(query.params, { platform });
      }

      const { data } = await axios.get("/game/select_top_by_playtime", query);

      dispatch({
        type: ActionType.GET_ALLGAMESBYTIME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.GET_ALLGAMESBYTIME_FAIL,
      });
    }
  };

  export const getGamesByPlayers =
  (genre?: string, platform?: string) =>
  async (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionType.GET_ALLGAMESBYPLAYERS });
    try {
      const query = { params: {} };
      if (genre) {
        Object.assign(query.params, { genre });
      }
      if (platform) {
        Object.assign(query.params, { platform });
      }
      const { data } = await axios.get("/game/select_top_by_players", query);

      dispatch({
        type: ActionType.GET_ALLGAMESBYPLAYERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.GET_ALLGAMESBYPLAYERS_FAIL,
      });
    }
  };
