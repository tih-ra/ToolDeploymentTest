import styled from 'styled-components';

const LoginS = styled.div`
  display: grid;
  justify-content: center;
  row-gap: 50px;
  align-items: start;
  grid-template-rows: 50% 50%;
  height: 100vh;
  *:first-child {
    align-self: end;
    justify-self: center;
  }
`;

export default LoginS;
