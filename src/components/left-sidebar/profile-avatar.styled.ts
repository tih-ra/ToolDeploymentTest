import styled, { css } from 'styled-components';
import { withContextAsProps } from 'react-context-consumer-hoc';
import { SidebarContextConsumer } from 'contexts/sidebar';
import { IProfileAvatarS } from 'types/common';

const collapsedMixin = css`
  height: 32px;
  width: 32px;
  margin: auto;
`;

const uncollapsedMixin = css`
  height: 40px;
  width: 40px;
`;

const ProfileAvatarS = styled.div`
  ${(props: IProfileAvatarS) =>
    props.collapsed ? collapsedMixin : uncollapsedMixin};
  background-image: url(${(props: IProfileAvatarS) => props.imageUrl});
  background-size: contain;
  cursor: pointer;
  border-radius: 50%;
`;

export default withContextAsProps(SidebarContextConsumer)(ProfileAvatarS);
