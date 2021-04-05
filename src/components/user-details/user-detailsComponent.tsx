import React from 'react';

// import { CustomCrmContainerComponentStyles } from './ButtonContainer.Styles';
import { StateToProps, DispatchToProps } from './user-detailsContainer.container';
import { withTaskContext,TaskContext  } from '@twilio/flex-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faFemale, faMale, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { UserDetailsComponentStyles } from './user-details.Styles';
interface OwnProps {
  // Props passed directly to the component
}

// Props should be a combination of StateToProps, DispatchToProps, and OwnProps
type Props = StateToProps & DispatchToProps & OwnProps;

// It is recommended to keep components stateless and use redux for managing states
class UserDetails extends React.Component {
    constructor(props:any){
        super(props)
    }

    callClient(client:any){
        debugger
    }

    emailClient(client:any){
        debugger
    }
    
  render (){
    return(    
    <UserDetailsComponentStyles>
        <TaskContext.Consumer>   
        {(context) => {
            const {task} = context;
            const taskData = task?.attributes.variables
            console.log('context ', taskData)
            return(
            context.task ? 
            <div key="user-details">
                <div className="user-name light-blue-text padding-bottom">
                {
                        taskData.gender === 'male'?
                        <FontAwesomeIcon style={{marginLeft:"0.5rem"}} icon={faMale} /> :  
                        <FontAwesomeIcon style={{marginLeft:"0.5rem"}} icon={faFemale} />
                    }
                    {taskData.ClientFirstName} {taskData.ClientLastName}
                </div>
                <div className="identification black-text padding-bottom">
                    <label>תז: </label> <span> {taskData.ClientId}</span>
                </div>
                <div className="address gold-text padding-bottom">
                    <span> {taskData.address}</span>
                </div>

                <div className="phone black-text padding-bottom">
                    <span> {taskData.phoneNumber}</span> <FontAwesomeIcon style={{marginRight:"0.5rem", color:"#2D76B5"}} icon={faPhone} onClick={()=>{this.callClient(taskData)}} />
                </div>
                <div className="email gold-text padding-bottom">
                    <FontAwesomeIcon style={{marginLeft:"0.5rem"}} icon={faEnvelope} onClick={()=>{this.emailClient(taskData)}}/> <span> {taskData.Email}</span> 
                </div>
                <div>
                    <span className="brand"> {taskData.brand}</span>
                </div>
            </div>
         :
         <div>no task configured</div>
        )}}
      
        </TaskContext.Consumer>
        </UserDetailsComponentStyles> 
    )
  }
};

export default withTaskContext(UserDetails);
