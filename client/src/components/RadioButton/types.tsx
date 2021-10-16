import { MouseEventHandler } from 'react';

export interface IRadioButton {
  item: {
    text: string;
    value: string;
    checked: boolean;
  };
  onClick: MouseEventHandler<HTMLInputElement>;
}
