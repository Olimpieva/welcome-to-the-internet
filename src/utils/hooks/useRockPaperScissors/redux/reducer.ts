import { State, Actions } from './types';
import {
  SET_INITIAL_STATE,
  SET_USER_CHOICE,
  SET_COMPUTER_CHOICE,
  INCREASE_USER_SCORE,
  INCREASE_COMPUTER_SCORE,
  SET_WINNER,
  RESET_CURRENT_TURN
} from './actionTypes';

export const initialState: State = {
  currentTurn: {
    userChoice: undefined,
    computerChoice: undefined
  },
  previosTurn: {
    userChoice: undefined,
    computerChoice: undefined
  },
  userScore: 0,
  computerScore: 0,
  winner: undefined
};

export const gameReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return initialState;
    case RESET_CURRENT_TURN:
      return {
        ...state,
        currentTurn: { userChoice: undefined, computerChoice: undefined }
      };
    case SET_USER_CHOICE:
      return {
        ...state,
        currentTurn: { ...state.currentTurn, userChoice: action.payload },
        previosTurn: { ...state.previosTurn, userChoice: action.payload }
      };
    case SET_COMPUTER_CHOICE:
      return {
        ...state,
        currentTurn: { ...state.currentTurn, computerChoice: action.payload },
        previosTurn: { ...state.previosTurn, computerChoice: action.payload }
      };
    case INCREASE_USER_SCORE:
      return { ...state, userScore: state.userScore + 1 };
    case INCREASE_COMPUTER_SCORE:
      return { ...state, computerScore: state.computerScore + 1 };
    case SET_WINNER:
      return { ...state, winner: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
