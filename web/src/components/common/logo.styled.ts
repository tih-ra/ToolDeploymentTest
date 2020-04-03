import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as LogoSvgConponent } from 'assets/svg/logo.svg';
import { withContextAsProps } from 'react-context-consumer-hoc';
import { SidebarContextConsumer } from 'contexts/sidebar';
import { ILogoSProps } from 'types/common';

export const LogoSvgS = styled(LogoSvgConponent)``;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const isLoadingAnimation = css`
  animation: ${rotateAnimation} infinite 10s linear;
`;

const darkLogoMixin = css`
  color: ${props => props.theme.colors[0]};
  text-align: center;
  ::after {
    margin-top: 16px;
    display: block;
  }

  ${LogoSvgS} {
    fill: ${props => props.theme.colors[0]};
    width: 36px;
  }
`;

const lightLogoCollapsedMixin = css`
  text-align: center;
  ::after {
    display: none;
  }
`;

const lightLogoUncollapsedMixin = css`
  ::after {
    display: inline-block;
    vertical-align: text-bottom;
    margin-left: 10px;
  }
`;

const lightLogoMixin = css`
  color: ${props => props.theme.colors[9]};
  ${(props: ILogoSProps) =>
    props.collapsed ? lightLogoCollapsedMixin : lightLogoUncollapsedMixin}
  ${LogoSvgS} {
    fill: ${props => props.theme.colors[9]};
    width: 27px;
  }
`;

const LogoS = styled.div`
  ::after {
    content: 'layout constructor';
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.05em;
    max-width: 100px;
  }
  ${(props: ILogoSProps) => (props.isDark ? darkLogoMixin : lightLogoMixin)};
  ${LogoSvgS} {
    ${(props: ILogoSProps) => (props.isLoading ? isLoadingAnimation : '')};
  }
`;

export default withContextAsProps(SidebarContextConsumer)(LogoS);
