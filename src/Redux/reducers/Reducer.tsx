import { ActionType } from "../actionTypes/actionTypesEnum";


type ParametreTypes ={
type:string,
payload:any
} 

export type StateType={
  games:any,
  errors:string | null,
  loading:boolean,
  topgamesbytime:any,
  topgamesbyplayers:any,
}
const init:Partial<StateType> = {
    games: null,
    errors:null,
    loading:false,
    topgamesbytime:null,
    topgamesbyplayers:null
  };

export const gamesReducer = (state = init, action:ParametreTypes):Partial<StateType> => {
    switch (action.type) {
      case ActionType.GET_ALLGAMESBYPLAYERS:
      case ActionType.GET_ALLGAMESBYTIME:
      case ActionType.GET_ALLGAMES:
        return {
          ...state,
          loading: true,
        };
        case ActionType.GET_ALLGAMESBYPLAYERS_SUCCESS:
            return{
                ...state ,
                topgamesbyplayers: action.payload
            };
        case ActionType.GET_ALLGAMESBYTIME_SUCCESS:
            return{
                ...state ,
                topgamesbytime: action.payload
            };
        case ActionType.GET_ALLGAMES_SUCCESS:
            return{
                ...state ,
                games: action.payload
            };
            case ActionType.GET_ALLGAMESBYPLAYERS_FAIL:
            case ActionType.GET_ALLGAMESBYTIME_FAIL:
            case ActionType.GET_ALLGAMES_FAIL:
            return{
                ...state ,
                errors: action.payload
            }
      default:
        return state;
    }
  };