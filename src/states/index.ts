import { AppState as FlexAppState } from '@twilio/flex-ui';
import { combineReducers, Action as ReduxAction } from 'redux';

import { CustomTaskListState, reduce as CustomTaskListReducer } from './CustomTaskListState';
import { CrmContainerState, reduce as CrmContainerReducer } from './CrmContainerStates';

// Register your redux store under a unique namespace
export const namespace = 'crm-container';

// Extend this payload to be of type that your ReduxAction is
export interface Action extends ReduxAction {
  payload?: any;
}

// Register all component states under the namespace
export interface AppState {
  flex: FlexAppState;
  'crm-container': {
    customTaskList: CustomTaskListState;
    crmContainerState : CrmContainerState
    // Other states
  };
}

// Combine the reducers
export default combineReducers({
  customTaskList: CustomTaskListReducer,
  crmContainerState:CrmContainerReducer
});
