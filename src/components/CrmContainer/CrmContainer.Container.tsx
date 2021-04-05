import { AppState } from '../../states';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Actions } from '../../states/CustomTaskListState';
import CrmContainer from './CrmContainer';

export interface StateToProps {
  // isOpen: boolean;
  data:any;
  document:any;
}

export interface DispatchToProps {
  // dismissBar: () => void;
  // task:any
}

const mapStateToProps = (state: AppState): StateToProps => {
  return ({
  data:{...state['crm-container'].crmContainerState.data},
  document : {...state['crm-container'].crmContainerState.document}
});}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchToProps => ({
  // dismissBar: bindActionCreators(Actions.dismissBar, dispatch),
  // task:()=>{console.log('here')}
});

export default connect(mapStateToProps, mapDispatchToProps)(CrmContainer);
