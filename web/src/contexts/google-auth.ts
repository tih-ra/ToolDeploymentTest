import { createContext, useContext } from 'react';

const GoogleAuthContext: React.Context<any> = createContext({});
export const GoogleAuthContextProvider = GoogleAuthContext.Provider;

export const useGoogleAuth = () => useContext(GoogleAuthContext);
