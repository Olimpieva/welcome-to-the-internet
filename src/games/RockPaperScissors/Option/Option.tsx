import { Button } from 'antd';
import React from 'react';

import css from './Option.module.scss';

enum Options {
  Rock = 1,
  Paper,
  Scissors
}

type Props = {
  type: Options;
  onClick: () => void;
  isDisabled: boolean;
};

function Option({ type, onClick, isDisabled }: Props) {
  return (
    <div className={css.container}>
      <Button disabled={isDisabled} onClick={onClick}>
        {`${type}`}
      </Button>
    </div>
  );
}

export default Option;
