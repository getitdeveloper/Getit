import { SELECT_TAB } from '@reducers/actions';

export interface InitialState {
  selectTab: number;
}

export interface ISelectTabAction {
  type: typeof SELECT_TAB;
  data: number;
}

export type ISelectTabActions = ISelectTabAction;
