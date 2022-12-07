import { useEffect, useCallback, useReducer } from 'react';

import { Options, Player, TurnEnds } from 'entities/games';
import { gameReducer, initialState } from './redux/reducer';
import {
  setComputerChoice,
  startGame,
  increaseUserScore,
  increaseComputerScore,
  startNewTurn,
  setWinner,
  setUserChoice
} from './redux/actions';

const gamingCases = {
  [Options.Rock]: {
    [Options.Rock]: TurnEnds.Draw,
    [Options.Paper]: TurnEnds.Lose,
    [Options.Scissors]: TurnEnds.Win
  },
  [Options.Paper]: {
    [Options.Rock]: TurnEnds.Win,
    [Options.Paper]: TurnEnds.Draw,
    [Options.Scissors]: TurnEnds.Lose
  },
  [Options.Scissors]: {
    [Options.Rock]: TurnEnds.Lose,
    [Options.Paper]: TurnEnds.Win,
    [Options.Scissors]: TurnEnds.Draw
  }
};

const useRockPaperScissors = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { currentTurn, previosTurn, userScore, computerScore, winner } = state;

  const startNewGame = useCallback(() => {
    dispatch(startGame());
  }, []);

  const makeUserChoice = useCallback((choice: Options) => {
    dispatch(setUserChoice(choice));
  }, []);

  useEffect(() => {
    if (currentTurn.userChoice) {
      dispatch(setComputerChoice());
    }
  }, [currentTurn.userChoice]);

  useEffect(() => {
    const { userChoice, computerChoice } = currentTurn;

    if (userChoice && computerChoice) {
      const userTurnResult = gamingCases[userChoice][computerChoice];

      if (userTurnResult === TurnEnds.Win) {
        dispatch(increaseUserScore());
      }

      if (userTurnResult === TurnEnds.Lose) {
        dispatch(increaseComputerScore());
      }

      dispatch(startNewTurn());
    }
  }, [currentTurn]);

  useEffect(() => {
    if (userScore === 3) {
      dispatch(setWinner(Player.User));
    }

    if (computerScore === 3) {
      dispatch(setWinner(Player.Computer));
    }
  }, [userScore, computerScore]);

  return {
    currentTurn,
    previosTurn,
    userScore,
    computerScore,
    winner,
    startNewGame,
    makeUserChoice
  };
};

export default useRockPaperScissors;
