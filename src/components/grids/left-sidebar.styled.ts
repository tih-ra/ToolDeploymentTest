import styled from 'styled-components';
import { withContextAsProps } from 'react-context-consumer-hoc';
import { SidebarContextConsumer } from 'contexts/sidebar';
import { ICollapsed } from 'types/common';

const LeftSidebarS = styled.div`
  background: ${props => props.theme.colors[1]};
  grid-area: left;
  padding: ${(props: ICollapsed) => (props.collapsed ? '12px 0' : '12px')};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32px 1fr 40px;
  grid-row-gap: 20px;
`;

export default withContextAsProps(SidebarContextConsumer)(LeftSidebarS);
