import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'utils/hooks';
import { selectIsAuthorized } from 'redux/user/selectors';

type Props = {
  children: JSX.Element;
};

const RequireAuth = ({ children }: Props) => {
  const isAuthorized = useAppSelector(selectIsAuthorized);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/welcome');
    }
  }, [isAuthorized, navigate]);

  if (!isAuthorized) {
    return null;
  }

  return children;
};

export default RequireAuth;
