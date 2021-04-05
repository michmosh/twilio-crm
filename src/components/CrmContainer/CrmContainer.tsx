import React from 'react';

import { CustomCrmContainerComponentStyles } from './CrmContainer.Styles';
import { StateToProps, DispatchToProps } from './CrmContainer.Container';
import CustomButton from '../button/ButtonComponent';
import { withTaskContext } from '@twilio/flex-ui';
import UserDetails from '../user-details/user-detailsComponent';
import axios, { AxiosResponse } from 'axios';
const Buttons : Array<any> =  [
  {
    type: "",
    display:"מאגר מידע",
    icon: false,
    action:'GET_KNOWLADGE_BASE'
  },
  {
    type: "",
    display:"שליחת מסמכים",
    icon: "faPaperclip",
    action:'SEND_DOCS'
  },
  {
    type: "",
    display:"מסמכים",
    icon: "faCopy",
    action:'COPY_FILE'
  },
  {
    type: "",
    display:"שיוך שיחה",
    icon: false,
    action:'CALL_BINDING'
  },
  {
    type: "",
    display:"טיפול בשיחה",
    icon: false,
    action:'CALL_HANDLE'
  }
]

const baseUrl = 'https://restcountries.eu/rest/v2/';
export interface OwnProps  {
  // Props passed directly to the component
  dispatch:Function,
  data:any,
  document:any
}

// Props should be a combination of StateToProps, DispatchToProps, and OwnProps
type Props = StateToProps & DispatchToProps & OwnProps;


// It is recommended to keep components stateless and use redux for managing states
class CrmContainer extends React.Component<OwnProps>  {
  constructor(props:any){
    super(props)
  }
   actionSwitch = (action:any)=>{
     
    switch(action){
      case 'GET_KNOWLADGE_BASE':
        this.getKnowledageBase();
        break;
      case 'SEND_DOCS':
        this.sendDocs()
        break;
      case 'CALL_BINDING':
        this.bindCall()
        break;
      case 'CALL_HANDLE':
        this.handleCall()
        break;
      case 'COPY_FILE':
        this.copyFile()
        break;
    }
  }

  async getKnowledageBase(){
    const response : AxiosResponse = await axios.get(`${baseUrl}name/mexico`)
    this.props.dispatch({type:'GET_KNOWLADGE_BASE', payload:response.data})
  }
  async sendDocs(){
    const response : AxiosResponse = await axios.get(`${baseUrl}name/colombia`)
    this.props.dispatch({type:'SEND_DOCS', payload:response.data})
  }

  async bindCall(){
    const response : AxiosResponse = await axios.get(`${baseUrl}name/uruguay`)
    this.props.dispatch({type:'CALL_BINDING', payload:response.data})
  }

  async handleCall(){
    const response : AxiosResponse = await axios.get(`${baseUrl}name/panama`)
    this.props.dispatch({type:'CALL_HANDLE', payload:response.data})
  }

  async copyFile(){
    const response : AxiosResponse = await axios.get(`${baseUrl}name/brasil`)
    this.props.dispatch({type:'COPY_FILE', payload:response.data})
  }
  render() {
    console.log('in container', this.props)
   return  <CustomCrmContainerComponentStyles>
      <div className="wrapper" >
        <div className="top">
          <div className="user-details">
              <UserDetails/>
          </div>
          <div className="button-wrapper">
            {
              Buttons.map(item=>{
                return (
                  <CustomButton test={{test:'test'}} isOpen={false} item={item} action={this.actionSwitch} key={item.display}>{item.display}</CustomButton>
                )
              })
            }
          </div>
        </div>
        <hr />
        <div className="bottom">
         { JSON.stringify(this.props.data)}
         { JSON.stringify(this.props.document)}
        </div>
      </div>
    </CustomCrmContainerComponentStyles>
  }
};

export default withTaskContext(CrmContainer);
