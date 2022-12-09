import React from 'react';

import { ChromeDinoGame } from 'games';

import css from './ChromeDinoGamePage.module.scss';

function ChromeDinoGamePage() {
  return (
    <div className={css.page}>
      <ChromeDinoGame />
    </div>
  );
}

export default ChromeDinoGamePage;
