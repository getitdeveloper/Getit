import { MouseEventHandler, ChangeEvent } from 'react';

export interface IRadioButton {
  item: {
    text: string;
    value: string;
    checked: boolean;
    count?: number;
  }[];
  onClick: MouseEventHandler<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
