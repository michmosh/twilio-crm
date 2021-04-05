import { Action } from './index';

const ACTION_DISMISS_BAR = 'DISMISS_BAR';
const TEST = 'TEST'

export interface CustomTaskListState {
  isOpen: boolean;
}

const initialState: CustomTaskListState = {
  isOpen: true,
};

export class Actions {
  public static dismissBar = (): Action => ({ type: ACTION_DISMISS_BAR });
  public static test = (): Action => ({type:TEST , payload:{test:'true'}})
}

export function reduce(state: CustomTaskListState = initialState, action: Action) {
  switch (action.type) {
    case ACTION_DISMISS_BAR: {
      return {
        ...state,
        isOpen: false,
      };
    }

    default:
      return state;
  }
}
