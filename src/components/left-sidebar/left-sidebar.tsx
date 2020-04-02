import React from 'react';
import LeftSidebarS from 'components/grids/left-sidebar.styled';
import Logo from 'components/common/logo';
import ProfileAvatar from './profile-avatar';
import Navigation from './navigation';

const LeftSidebar = () => (
  <LeftSidebarS>
    <Logo />
    <Navigation />
    <ProfileAvatar />
  </LeftSidebarS>
);

export default LeftSidebar;
