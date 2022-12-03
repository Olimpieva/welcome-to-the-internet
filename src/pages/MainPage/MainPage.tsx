import React from 'react';
import { Link } from 'react-router-dom';
import { selectUsername } from 'redux/user/selectors';
import { useAppSelector } from 'utils/hooks';

import css from './MainPage.module.scss';

function MainPage() {
  const username = useAppSelector(selectUsername);

  return (
    <div className={css.page}>
      <p>{`Hello, ${username}`}</p>
      <Link to="/dashboard/memes">Go to memes</Link>
      <p> </p>
      <Link to="/dashboard/games">Go to games</Link>
    </div>
  );
}

export default MainPage;
