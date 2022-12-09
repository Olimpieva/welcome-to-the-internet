import React from 'react';

import { RockPaperScissors } from 'games';

import css from './RockPaperScissorsPage.module.scss';

function RockPaperScissorsPage() {
  return (
    <div className={css.page}>
      <h1>Rock Paper Scissors</h1>
      <RockPaperScissors />
    </div>
  );
}

export default RockPaperScissorsPage;
