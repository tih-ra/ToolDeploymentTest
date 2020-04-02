import styled from 'styled-components';

export const CalcPanelS = styled.div`
  background: ${props => props.theme.colors[9]};
  grid-area: left;
  padding: 14px 20px;
`;

export const DescriptionS = styled.div`
  display: grid;
  grid-template-columns: 0.3fr auto;
  grid-template-rows: auto;
  grid-column-gap: 18px;
  align-items: center;

  img {
    width: 74px;
  }
`;
