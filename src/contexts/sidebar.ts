import { createContext } from 'react';

interface ISidebarContext {
  collapsed: boolean | any;
}

const SidebarContext: React.Context<ISidebarContext> = createContext({
  collapsed: false
});

export const SidebarContextProvider = SidebarContext.Provider;
export const SidebarContextConsumer = SidebarContext.Consumer;
