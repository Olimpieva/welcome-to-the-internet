import React from 'react';
import { Button } from 'antd';

import { Options, Player } from 'entities/games';
import { useRockPaperScissors } from 'utils/hooks';
import Option from './Option/Option';
import TurnChoice from './TurnChoice';

import css from './RockPaperScissors.module.scss';

const optionsKeys = Object.keys(Options) as Options[];

function RockPaperScissors() {
  const { makeUserChoice, winner, startNewGame, previosTurn, userScore, computerScore } = useRockPaperScissors();

  return (
    <div className={css.page}>
      <h1>ROCK PAPER SCISSORS</h1>
      <p>{`User score: ${userScore}`}</p>
      <p>{`Computer score: ${computerScore}`}</p>

      <div>
        {optionsKeys.map((option: Options) => (
          <Option key={option} type={option} isDisabled={!!winner} onClick={() => makeUserChoice(Options[option])} />
        ))}
      </div>

      <div>
        <p>User choice:</p>
        <TurnChoice type={previosTurn.userChoice} />
        <p>Computer choice</p>
        <TurnChoice type={previosTurn.computerChoice} />
      </div>

      {!!winner && (
        <div>
          <h2>{`Winner: ${Player[winner]}`}</h2>
          <Button onClick={() => startNewGame()}>Start new game</Button>
        </div>
      )}
    </div>
  );
}

export default RockPaperScissors;
