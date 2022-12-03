import React from 'react';

import { useMinesweeper } from 'utils/hooks';

import css from './Minesweeper.module.scss';
import Cell from './Cell';

function Minesweeper() {
  const size = 10;

  const dimension = new Array(size).fill(null);

  const { getCellState, makeCellVisible, toggleFlag, detectedBombsCounter, isGameLost, isGameWon } =
    useMinesweeper(size);

  return (
    <div>
      <h1>MINESWEEPER</h1>
      <p>{`Bombs: ${10 - detectedBombsCounter}`}</p>
      {isGameWon && <p>WIN!!!</p>}
      {isGameLost && <p>LOOSE!</p>}
      {dimension.map((_, y) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={y} className={css.row}>
          {
            // eslint-disable-next-line @typescript-eslint/no-shadow
            dimension.map((_, x) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={x} className={css.cell}>
                <Cell
                  state={getCellState(x, y)}
                  makeVisible={() => makeCellVisible(x, y)}
                  toggleFlag={() => toggleFlag(x, y)}
                />
              </div>
            ))
          }
        </div>
      ))}
    </div>
  );
}

export default Minesweeper;
