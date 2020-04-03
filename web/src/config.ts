import Project from 'components/pages/project';

interface IConfig {
  urls: {
    [key: string]: {
      title?: string;
      collapsed: boolean;
      component?: () => JSX.Element;
    };
  };
  clients: {
    [key: string]: string;
  };
}

export const config: IConfig = {
  urls: {
    '/': {
      collapsed: false
    },
    '/projects': {
      title: 'projects',
      collapsed: true,
      component: Project
    },
    '/saved_layouts': {
      title: 'saved layouts',
      collapsed: true
    },
    '/approved_layouts': {
      title: 'approved layouts',
      collapsed: true
    },
    '/search': {
      title: 'search',
      collapsed: true
    }
  },
  clients: {
    googleClientId:
      '1046538909168-m8mhj81vqp8d3r4skc2sijrqploh1ghi.apps.googleusercontent.com',
    googleClientSecret: 'bu5iUZGWttbxBRdtyMxg0s6p'
  }
};
