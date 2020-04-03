import React from 'react';
import BreadcrumbsS from './breadcrumbs.styled';

const Breadcrumbs = () => (
  <BreadcrumbsS>
    Projects /
    <input type="text" placeholder="Project title" />
  </BreadcrumbsS>
);

export default Breadcrumbs;
