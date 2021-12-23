import { MY_PROFILE_SELECT_MENU } from '@reducers/actions';

export interface InitialState {
  selectMenu: {
    selected: number;
    toggle?: boolean;
  };
}

export interface IMyProfileSelectMenuAction {
  type: typeof MY_PROFILE_SELECT_MENU;
  data: {
    selected: number;
    toggle?: boolean;
  };
}
