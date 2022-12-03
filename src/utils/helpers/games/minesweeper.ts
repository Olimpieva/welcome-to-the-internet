import { MINE } from 'utils/constants/games';

// eslint-disable-next-line import/prefer-default-export
export const createField = (size: number): number[] => {
  const field: number[] = new Array(size * size).fill(0);

  const determineCellValue = (x: number, y: number) => {
    if (x >= 0 && x < size && y >= 0 && y < size) {
      if (field[y * size + x] === MINE) return;

      field[y * size + x] += 1;
    }
  };

  for (let i = 0; i < size; ) {
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);

    if (field[y * size + x] === MINE) {
      i += 1;
    }

    field[y * size + x] = MINE;

    i += 1;

    determineCellValue(x + 1, y);
    determineCellValue(x - 1, y);
    determineCellValue(x, y + 1);
    determineCellValue(x, y - 1);
    determineCellValue(x + 1, y - 1);
    determineCellValue(x - 1, y + 1);
    determineCellValue(x + 1, y + 1);
    determineCellValue(x - 1, y - 1);
  }

  return field;
};
