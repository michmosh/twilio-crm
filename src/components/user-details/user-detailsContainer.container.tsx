import { AppState } from '../../states';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Actions } from '../../states/CustomTaskListState';
 
import UserDetails from './user-detailsComponent';

export interface StateToProps {
  isOpen: boolean;
}

export interface DispatchToProps {
  // dismissBar: () => void;
}

const mapStateToProps = (state: AppState): StateToProps => ({
  isOpen: state['crm-container'].customTaskList.isOpen,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchToProps => ({
  dismissBar: bindActionCreators(Actions.dismissBar, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
