import React from 'react';

import { Minesweeper } from 'games';

import css from './MinesweeperPage.module.scss';

function MinesweeperPage() {
  return (
    <div className={css.page}>
      <h1>Minesweeper</h1>
      <Minesweeper />
    </div>
  );
}

export default MinesweeperPage;
