import thunk from 'redux-thunk' 
import { composeWithDevTools } from 'redux-devtools-extension';

import { gamesReducer } from './reducers/Reducer';
import { createStore, applyMiddleware } from "redux";






export const store = createStore( gamesReducer,composeWithDevTools(applyMiddleware(thunk)));

