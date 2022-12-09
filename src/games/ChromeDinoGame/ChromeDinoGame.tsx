import React from 'react';

import { ReactComponent as GroundImage } from 'assets/dino-chrome-game/ground.svg';
import { ReactComponent as DinoImage } from 'assets/dino-chrome-game/dino-stationary.svg';

import css from './ChromeDinoGame.module.scss';

function ChromeDinoGame() {
  return (
    <div className={css.container}>
      {/* <h1>CHROME DINO GAME</h1> */}
      <div className={css.startScreen}>Press any key to start</div>
      <span className={css.score}>0</span>
      <GroundImage className={css.groundStart} />
      <GroundImage className={css.groundEnd} />
      <DinoImage className={css.dino} />
    </div>
  );
}

export default ChromeDinoGame;
