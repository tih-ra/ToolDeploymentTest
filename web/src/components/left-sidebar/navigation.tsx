import React from 'react';
import { Link } from 'react-router-dom';
import { config } from 'config';
import NavigationS from './navigation.styled';

const { urls } = config;

const Navigation = () => (
  <NavigationS>
    {Object.entries(urls).map(
      ([key, { title }]) =>
        title && (
          <li key={title}>
            <Link to={key}>{title}</Link>
          </li>
        )
    )}
  </NavigationS>
);

export default Navigation;
