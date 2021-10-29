import * as React from 'react';
import { StyledRadioInput, StyledLabel } from './styles';
import { IRadioButton } from './types';

function RadioButton({ item, onClick }: IRadioButton): JSX.Element {
  console.log('props ===>', item);
  return (
    <>
      <StyledRadioInput
        key={item.value}
        type='radio'
        id={`radio-${item.value}`}
        name={item.value}
        onClick={onClick}
        checked={item.checked}
      />
      <StyledLabel htmlFor={`radio-${item.value}`}>{item.text}</StyledLabel>
    </>
  );
}

export default RadioButton;
