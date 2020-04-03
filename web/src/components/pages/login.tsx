import React from 'react';
import GoogleButton from 'react-google-button';
import LoginS from 'components/grids/login.styled';
import Logo from 'components/common/logo';
import { useGoogleAuth } from 'contexts/google-auth';

const Login = () => {
  const { signIn, isInitialized } = useGoogleAuth();
  return (
    <LoginS>
      <Logo isDark isLoading={!isInitialized} />
      {isInitialized && <GoogleButton onClick={signIn} />}
    </LoginS>
  );
};

export default Login;
