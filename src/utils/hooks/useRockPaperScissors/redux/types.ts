import { Options, Player } from 'entities/games/rockPaperScissors';

import {
  SET_INITIAL_STATE,
  SET_USER_CHOICE,
  SET_COMPUTER_CHOICE,
  INCREASE_USER_SCORE,
  INCREASE_COMPUTER_SCORE,
  SET_WINNER,
  RESET_CURRENT_TURN
} from './actionTypes';

export type State = {
  currentTurn: {
    userChoice: undefined | Options;
    computerChoice: undefined | Options;
  };
  previosTurn: {
    userChoice: undefined | Options;
    computerChoice: undefined | Options;
  };
  userScore: number;
  computerScore: number;
  winner: undefined | Player;
};

interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}

export function createAction<T extends string, P>(type: T, payload?: P): Action<T, P> {
  return { type, payload };
}

export type StartGameAction = Action<typeof SET_INITIAL_STATE, void>;

export type StartNewTurnAction = Action<typeof RESET_CURRENT_TURN, void>;

export type SetUserChoiceAction = Action<typeof SET_USER_CHOICE, Options>;

export type SetComputerChoiceAction = Action<typeof SET_COMPUTER_CHOICE, Options>;

export type IncreaseUserScoreAction = Action<typeof INCREASE_USER_SCORE, void>;

export type IncreaseComputerScoreAction = Action<typeof INCREASE_COMPUTER_SCORE, void>;

export type SetWinnerAction = Action<typeof SET_WINNER, Player>;

export type Actions =
  | StartGameAction
  | StartNewTurnAction
  | SetUserChoiceAction
  | SetComputerChoiceAction
  | IncreaseUserScoreAction
  | IncreaseComputerScoreAction
  | SetWinnerAction;
