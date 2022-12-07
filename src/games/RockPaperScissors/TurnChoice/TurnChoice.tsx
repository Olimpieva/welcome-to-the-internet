import React from 'react';

import { Options } from 'entities/games';
import { ReactComponent as RockImage } from 'assets/fist-svgrepo-com.svg';
import { ReactComponent as PaperImage } from 'assets/palm-svgrepo-com.svg';
import { ReactComponent as ScissorsImage } from 'assets/hand-scissors-svgrepo-com.svg';

import css from './TurnChoice.module.scss';

type Props = {
  type: Options | undefined;
};

const ChoiceIcons = {
  [Options.Rock]: <RockImage className={css.icon} />,
  [Options.Paper]: <PaperImage className={css.icon} />,
  [Options.Scissors]: <ScissorsImage className={css.icon} />
};

function TurnChoice({ type }: Props) {
  if (!type) {
    return <p>Loading...</p>;
  }

  return (
    <div className={css.container}>
      <p>{`${type}`}</p>

      {ChoiceIcons[type]}
    </div>
  );
}

export default TurnChoice;
