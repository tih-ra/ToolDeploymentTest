/* eslint no-shadow: ["error", { "allow": ["title"] }] */
import React from 'react';
import Input from 'components/common/form/input';
import { IFieldsetProps } from 'types/common';
import FieldsetS from './fieldset.styled';

const Fieldset = ({ title, items }: IFieldsetProps) => (
  <FieldsetS>
    <legend>{title}</legend>
    {items.map(({ title, suffix, defaultValue, step }) => (
      <Input
        title={title}
        suffix={suffix}
        defaultValue={defaultValue}
        step={step}
        key={title}
      />
    ))}
  </FieldsetS>
);

export default Fieldset;
