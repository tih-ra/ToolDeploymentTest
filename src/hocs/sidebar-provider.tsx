import React from 'react';
import { withRouter } from 'react-router-dom';
import { SidebarContextProvider } from 'contexts/sidebar';
import { config } from 'config';
import { IAnyChildren } from 'types/common';

const { urls } = config;

interface ISidebarProviderProps extends IAnyChildren {
  location: any;
}

const SidebarProvider = ({ children, location }: ISidebarProviderProps) => (
  <SidebarContextProvider
    value={{ collapsed: urls[location.pathname].collapsed }}
  >
    {children}
  </SidebarContextProvider>
);

export default withRouter(SidebarProvider);
