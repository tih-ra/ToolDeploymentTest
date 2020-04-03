import React from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';
import { GoogleAuthContextProvider } from 'contexts/google-auth';
import { config } from 'config';
import { IAnyChildren } from 'types/common';

const {
  clients: { googleClientId }
} = config;

const GoogleAuthProvider = ({ children }: IAnyChildren) => {
  const googleAuth = useGoogleLogin({
    clientId: googleClientId
  });

  return (
    <GoogleAuthContextProvider value={googleAuth}>
      {children}
    </GoogleAuthContextProvider>
  );
};

export default GoogleAuthProvider;
