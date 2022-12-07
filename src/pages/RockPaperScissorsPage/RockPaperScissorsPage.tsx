import React from 'react';

import { RockPaperScissors } from 'games';

import css from './MinesweeperPage.module.scss';

function MinesweeperPage() {
  return (
    <div className={css.page}>
      <h1>Rock Paper Scissors</h1>
      <RockPaperScissors />
    </div>
  );
}

export default MinesweeperPage;
