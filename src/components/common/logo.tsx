import React from 'react';
import LogoS, { LogoSvgS } from 'components/common/logo.styled';
import { ILogoProps } from 'types/common';

const Logo = ({ isDark = false, isLoading = false }: ILogoProps) => (
  <LogoS isDark={isDark} isLoading={isLoading}>
    <LogoSvgS />
  </LogoS>
);

export default Logo;
