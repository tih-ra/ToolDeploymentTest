import styled from 'styled-components';
import { withContextAsProps } from 'react-context-consumer-hoc';
import { SidebarContextConsumer } from 'contexts/sidebar';
import { ICollapsed } from 'types/common';

const NavigationUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  font-size: 16px;
  line-height: 36px;
  text-transform: capitalize;
  color: ${props => props.theme.colors[4]};
  width: 100%;
  li {
    display: ${(props: ICollapsed) => (props.collapsed ? 'none' : 'inherit')};
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: ${props => props.theme.colors[9]};
  }
`;

export default withContextAsProps(SidebarContextConsumer)(NavigationUl);
