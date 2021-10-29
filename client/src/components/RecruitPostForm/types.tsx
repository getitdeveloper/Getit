import { ChangeEventHandler } from 'react';

export interface ICountInput {
  item: {
    text: string;
    value: string;
    checked: boolean;
    count: number | string;
  };
  onChange: ChangeEventHandler<HTMLInputElement>;
}
