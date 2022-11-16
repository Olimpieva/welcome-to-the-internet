import React from 'react';
import LoginForm from './LoginForm';

import css from './WelcomePage.module.scss';

function WelcomePage() {
  return (
    <div className={css.page}>
      Hello, LoginForm!
      <LoginForm />
    </div>
  );
}

export default WelcomePage;
