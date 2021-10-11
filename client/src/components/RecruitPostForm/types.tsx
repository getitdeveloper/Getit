import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface IRadioButton {
  value: {
    text: string;
    checked: boolean;
    count: number | string;
  };
  onClick: MouseEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
