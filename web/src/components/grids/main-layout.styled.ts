import styled from 'styled-components';
import { withContextAsProps } from 'react-context-consumer-hoc';
import { SidebarContextConsumer } from 'contexts/sidebar';
import { ICollapsed } from 'types/common';

const MainLayoutS = styled.div`
  display: grid;
  grid-template-columns: ${(props: ICollapsed) =>
    props.collapsed ? '54px 1fr' : '180px 1fr'};
  grid-template-rows: 1fr;
  height: 100vh;
  grid-template-areas: 'left main';
`;

export default withContextAsProps(SidebarContextConsumer)(MainLayoutS);
