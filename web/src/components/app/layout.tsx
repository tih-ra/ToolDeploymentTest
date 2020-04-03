import React from 'react';
import MainLayoutS from 'components/grids/main-layout.styled';
import LeftSidebar from 'components/left-sidebar/left-sidebar';
import SidebarProvider from 'hocs/sidebar-provider';
import Login from 'components/pages/login';
import { Route } from 'react-router-dom';
import { config } from 'config';
import { useGoogleAuth } from 'contexts/google-auth';

const { urls } = config;

const Layout = () => {
  const { isSignedIn } = useGoogleAuth();

  return (
    <SidebarProvider>
      {isSignedIn ? (
        <MainLayoutS>
          <LeftSidebar />
          {Object.entries(urls).map(([key, { title, component }]) => (
            <Route key={key} title={title} component={component} path={key} />
          ))}
        </MainLayoutS>
      ) : (
        <Login />
      )}
    </SidebarProvider>
  );
};

export default Layout;
