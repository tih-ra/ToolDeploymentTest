import styled from 'styled-components';

export const ScenarioPanelS = styled.div`
  grid-area: main;
  width: 480px;
  height: 100vh;
  background: ${props => props.theme.colors[6]};
  display: grid;
  grid-column-gap: 1px;
  padding-right: 1px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 28px auto;
  grid-template-areas:
    'header header header'
    'main main main';
`;

export const HeadTitleS = styled.span`
  align-self: center;
  padding-left: 16px;
  font-size: 12px;
`;

export const KpiPanelS = styled.div`
  grid-row: main;
  /* display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto; */
  background: ${props => props.theme.background};
  padding: 14px;
`;

export const KpiBlockS = styled.article`
  padding: 0;
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 30px;
  span {
    font-size: 12px;
    line-height: 14px;
    display: block;
    color: ${props => props.theme.colors[4]};
  }
`;

export const SeparatorS = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 16px;
  margin-bottom: 20px;
  /* opacity: 0.6; */
  background: ${props => props.theme.colors[6]};
`;
