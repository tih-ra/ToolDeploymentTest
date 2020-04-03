import React, { useState } from 'react';
import { IInputProps } from 'types/common';
import { InputS, LabelS, ButtonS } from './input.styled';

const Input = ({
  title,
  suffix = '',
  defaultValue = 0,
  step = 1
}: IInputProps) => {
  const [val, setVal] = useState(defaultValue);

  return (
    <LabelS title={title} suffix={suffix}>
      <InputS
        value={val}
        onChange={e => setVal(parseFloat(e.target.value || '0'))}
        step={step}
      />
      <ButtonS onClick={() => setVal(val + step)} arrowType="up" />
      <ButtonS onClick={() => setVal(val - step)} arrowType="down" />
    </LabelS>
  );
};

export default Input;
