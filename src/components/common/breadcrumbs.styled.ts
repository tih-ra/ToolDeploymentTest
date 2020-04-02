import styled from 'styled-components';

const BreadcrumpsS = styled.h4`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-column-gap: 5px;
  align-items: center;
  margin: 0;
  input {
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors[5]};
    width: 100%;
    font-size: 20px;
    ::placeholder {
      color: ${props => props.theme.colors[5]};
    }
  }
`;

export default BreadcrumpsS;
