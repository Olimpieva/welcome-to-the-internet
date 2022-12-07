import { Options, Player } from 'entities/games/rockPaperScissors';
import {
  StartGameAction,
  SetUserChoiceAction,
  SetComputerChoiceAction,
  IncreaseUserScoreAction,
  IncreaseComputerScoreAction,
  SetWinnerAction,
  createAction,
  StartNewTurnAction
} from './types';
import {
  SET_INITIAL_STATE,
  SET_USER_CHOICE,
  SET_COMPUTER_CHOICE,
  INCREASE_USER_SCORE,
  INCREASE_COMPUTER_SCORE,
  SET_WINNER,
  RESET_CURRENT_TURN
} from './actionTypes';

export const startGame = (): StartGameAction => createAction(SET_INITIAL_STATE);

export const startNewTurn = (): StartNewTurnAction => createAction(RESET_CURRENT_TURN);

export const setUserChoice = (value: Options): SetUserChoiceAction => createAction(SET_USER_CHOICE, value);

export const setComputerChoice = (): SetComputerChoiceAction => ({
  type: SET_COMPUTER_CHOICE,
  payload: Options[(Object.keys(Options) as Options[])[Math.floor(Math.random() * 2)]]
});

export const increaseUserScore = (): IncreaseUserScoreAction => createAction(INCREASE_USER_SCORE);

export const increaseComputerScore = (): IncreaseComputerScoreAction => ({ type: INCREASE_COMPUTER_SCORE });

export const setWinner = (winner: Player): SetWinnerAction => createAction(SET_WINNER, winner);
