import React from 'react';

import { Minesweeper } from 'games';

import css from './GamesPage.module.scss';

function GamesPage() {
  console.log('GAMES');
  return (
    <div className={css.page}>
      <Minesweeper />
    </div>
  );
}

export default GamesPage;
