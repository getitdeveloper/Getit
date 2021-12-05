import { ChangeEventHandler, ChangeEvent } from 'react';

export interface ICountInput {
  item: {
    text: string;
    value: string;
    checked: boolean;
    count?: number | undefined;
  };
  onChange: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
}
