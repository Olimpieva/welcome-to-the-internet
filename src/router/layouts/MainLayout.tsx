import React, { memo, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppSelector, useAppThunkDispatch } from 'utils/hooks';
import { selectIsAuthorized } from 'redux/user/selectors';
import { identifyUser } from 'redux/user/actions';

import './MainLayout.module.scss';

const MainLayout = () => {
  const isAuthorized = useAppSelector(selectIsAuthorized);
  const dispatch = useAppThunkDispatch();

  useEffect(() => {
    if (isAuthorized === undefined) {
      dispatch(identifyUser());
    }
  }, [dispatch, isAuthorized]);

  if (isAuthorized === undefined) {
    return null;
  }

  return <Outlet />;
};

export default memo(MainLayout);
