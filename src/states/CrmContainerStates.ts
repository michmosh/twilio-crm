import { Action } from './index';

const TEST = 'TEST';
const GET_KNOWLADGE_BASE = 'GET_KNOWLADGE_BASE';
const SEND_DOCS = 'SEND_DOCS';
const CALL_BINDING = 'CALL_BINDING';
const CALL_HANDLE = 'CALL_HANDLE';
const COPY_FILE = 'COPY_FILE';

export interface CrmContainerState {
//   isOpen: boolean;
document:any,
data:any
}

const initialState: CrmContainerState = {
  data:{},
  document:{}
};

export class Actions {
  public static test = (): Action => ({type:TEST , payload:{test:'true'}})
  public static getKnowledgeBase = (data:Array<any>): Action => ({type:GET_KNOWLADGE_BASE , payload: data})
  public static sendDocument = (doc:any): Action => ({type:SEND_DOCS , payload:{document:doc}})
  public static bindCall = (task:any): Action => ({type:CALL_BINDING , payload:{task}})
  public static callHandle = (task:any): Action => ({type:CALL_HANDLE , payload:{task}})
  public static copyFile = (file:any): Action => ({type:COPY_FILE , payload:{file}})
}

export function reduce(state: CrmContainerState = initialState, action: Action) {
    console.log("action type -> ",action.type)
    switch (action.type) {
        case GET_KNOWLADGE_BASE: 
            return {...state,data: action.payload};
        case SEND_DOCS : 
            return {...state , document:action.payload}
        case CALL_BINDING : 
            return {...state , document:action.payload}
        case CALL_HANDLE : 
            return {...state , document:action.payload}
        case COPY_FILE : 
            return {...state , document:action.payload}
        default:
            return state;
    }
}
