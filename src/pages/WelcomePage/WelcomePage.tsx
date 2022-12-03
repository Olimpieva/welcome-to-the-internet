import { Button } from 'antd';
import React, { useState } from 'react';
import AuthForm from './AuthForm';

import css from './WelcomePage.module.scss';

function WelcomePage() {
  const [isAuthFormVisible, setIsAuthFormVisible] = useState<boolean>(false);
  const [isCancelButtonToched, setIsCancelButtonToched] = useState<boolean>(false);

  const onSubmitButtonClick = () => {
    setIsAuthFormVisible(true);
  };

  const onCancelButtonClick = () => {
    setIsCancelButtonToched(true);
  };

  return (
    <div className={css.page}>
      <p>Welcome to the internet</p>
      <p>Do you want to start?</p>

      {isCancelButtonToched ? (
        <Button type="primary" htmlType="submit" onClick={onSubmitButtonClick}>
          Yes
        </Button>
      ) : (
        <Button type="primary" onClick={onCancelButtonClick} danger>
          No
        </Button>
      )}

      <Button type="primary" htmlType="submit" onClick={onSubmitButtonClick}>
        Yes
      </Button>

      {isAuthFormVisible && <AuthForm />}
    </div>
  );
}

export default WelcomePage;
