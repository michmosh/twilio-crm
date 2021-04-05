import { AppState } from '../../states';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Actions } from '../../states/CustomTaskListState';
 
import CustomButton from './ButtonComponent';

export interface StateToProps {
  isOpen: boolean;
  test : any
  children:any,
  item:any;
  key:any;
  action: (action:any)=>void
}

export interface DispatchToProps {
  // dismissBar: () => void;
  test : any;
  action: (action:any)=>void;
}

const mapStateToProps = (state: AppState): StateToProps => ({
  isOpen: state['crm-container'].customTaskList.isOpen,
  test : 'test',
  children:[],
  item : {},
  action: (action:any)=>console.log('action'),
  key : 'test'
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchToProps => ({
  // dismissBar: bindActionCreators(Actions.dismissBar, dispatch),
  test : bindActionCreators(Actions.test , dispatch),
  action : (action:any)=>console.log('in container')
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomButton);
