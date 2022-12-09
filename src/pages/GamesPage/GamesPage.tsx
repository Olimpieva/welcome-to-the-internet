import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import css from './GamesPage.module.scss';

function GamesPage() {
  return (
    <div className={css.page}>
      <Link to="minesweeper">
        <Button>Minesweeper</Button>
      </Link>
      <Link to="rock-paper-scissors">
        <Button>Rock Paper Scissors</Button>
      </Link>
      <Link to="chrome-dino">
        <Button>Chrome Dino</Button>
      </Link>
    </div>
  );
}

export default GamesPage;
