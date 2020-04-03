import styled, { css } from 'styled-components';
import UpSvg from 'assets/svg/up.svg';
import { IInputSProps, ILabelProps, IButtonArrowsPropsS } from 'types/common';

export const InputS = styled.input.attrs((props: IInputSProps) => ({
  type: 'text',
  defaultValue: props.defaultValue,
  step: props.step
}))`
  width: 98%;
  font-size: 18px;
  border: none;
  text-align: right;
  background: transparent;
  grid-area: input;
`;

export const LabelS = styled.label`
  display: grid;
  grid-template-columns: auto auto auto 10px;
  grid-template-rows: auto;
  grid-template-areas: "title input suffix buttons";
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors[6]};

  ::before {
    content: '${(props: ILabelProps) => props.title}';
    color: ${props => props.theme.colors[4]};
    font-size: 12px;
    grid-area: title;
  }
  ::after {
    content: '${(props: ILabelProps) => props.suffix}';
    grid-area: suffix;
    text-align: right;
    margin-left: ${(props: ILabelProps) => (props.suffix ? '4px' : '0')};
    margin-right: 4px;
  }
`;

const upButtonMixin = css`
  align-self: flex-start;
`;

const downButtonMixin = css`
  transform: rotate(180deg);
  align-self: flex-end;
`;

export const ButtonS = styled.button`
  width: 10px;
  height: 50%;
  border: 0;
  padding: 0;
  grid-area: buttons;
  background-image: url(${UpSvg});
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  ${(props: IButtonArrowsPropsS) =>
    props.arrowType === 'up' ? upButtonMixin : downButtonMixin}
`;
