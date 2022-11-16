import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';

import { useAppThunkDispatch } from 'utils/hooks';
import { login } from 'redux/user/actions';

import css from './LoginForm.module.scss';

function LoginForm() {
  const dispatch = useAppThunkDispatch();
  const navigate = useNavigate();

  const onSubmit = async ({ name }: any) => {
    try {
      await dispatch(login(name));

      navigate('/dashboard');
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className={css.page}>
      <Form name="basic" onFinish={onSubmit} autoComplete="off">
        <Form.Item label="name" name="name" rules={[{ required: true, message: 'Plase input your name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
