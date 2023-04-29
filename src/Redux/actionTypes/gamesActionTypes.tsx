// export const ALLGAMES = "ALLGAMES";
// export const GET_ALLGAMES_SUCCESS = "GET_ALLGAMES_SUCCESS";
// export const GET_ALLGAMES_FAIL = "GET_ALLGAMES_FAIL";

import { ActionType } from "./actionTypesEnum";

interface GET_ALLGAMES {
  type: ActionType.GET_ALLGAMES;
  playload?: any;
}

interface GET_ALLGAMES_SUCCESS {
  type: ActionType.GET_ALLGAMES_SUCCESS;
  playload?: any;
}

interface GET_ALLGAMES_FAIL {
  type: ActionType.GET_ALLGAMES_FAIL;
  playload?: any;
}

interface GET_ALLGAMESBYTIME {
  type: ActionType.GET_ALLGAMESBYTIME;
  playload?: any;
}

interface GET_ALLGAMESBYTIME_SUCCESS {
  type: ActionType.GET_ALLGAMESBYTIME_SUCCESS;
  playload?: any;
}

interface GET_ALLGAMESBYTIME_FAIL {
  type: ActionType.GET_ALLGAMESBYTIME_FAIL;
  playload?: any;
}
interface GET_ALLGAMESBYPLAYERS {
  type: ActionType.GET_ALLGAMESBYPLAYERS;
  playload?: any;
}

interface GET_ALLGAMESBYPLAYERS_SUCCESS {
  type: ActionType.GET_ALLGAMESBYPLAYERS_SUCCESS;
  playload?: any;
}

interface GET_ALLGAMESBYPLAYERS_FAIL {
  type: ActionType.GET_ALLGAMESBYPLAYERS_FAIL;
  playload?: any;
}

export type Actions =
  | GET_ALLGAMES
  | GET_ALLGAMES_SUCCESS
  | GET_ALLGAMES_FAIL
  | GET_ALLGAMESBYTIME_FAIL
  | GET_ALLGAMESBYTIME_SUCCESS
  | GET_ALLGAMESBYTIME
  | GET_ALLGAMESBYPLAYERS
  | GET_ALLGAMESBYPLAYERS_SUCCESS
  | GET_ALLGAMESBYPLAYERS_FAIL;
