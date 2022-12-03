import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import { useAppThunkDispatch } from 'utils/hooks';
import { authUser } from 'redux/user/actions';

import css from './AuthForm.module.scss';

function AuthForm() {
  const dispatch = useAppThunkDispatch();
  const navigate = useNavigate();

  const onSubmit = async ({ name }: any) => {
    try {
      await dispatch(authUser(name));

      navigate('/dashboard');
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Form name="basic" onFinish={onSubmit} autoComplete="off" className={css.form}>
      <p>Please input your name</p>
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: 'You ask me for some internet, but you do it without respect.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Ok
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AuthForm;
