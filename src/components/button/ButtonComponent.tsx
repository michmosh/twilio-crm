import React from 'react';

// import { CustomCrmContainerComponentStyles } from './ButtonContainer.Styles';
import { StateToProps, DispatchToProps } from './ButtonContainer.container';
import { Button } from '@twilio/flex-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faCopy } from '@fortawesome/free-solid-svg-icons'
import { CustomButtonStyles } from './Button.Styles';
interface OwnProps {
  // Props passed directly to the component
  item:any,
  children:any,
  action:any
  
}

// Props should be a combination of StateToProps, DispatchToProps, and OwnProps
type Props = StateToProps & DispatchToProps & OwnProps;

const switchIcons = (icon: any)=>{
    switch(icon){
        case "faCopy":
            return <FontAwesomeIcon title="copy file" icon={faCopy} />
        case "faPaperclip": 
            return <FontAwesomeIcon title="attach file" icon={faPaperclip} />
        default :  return false
    }
}

const sendAction = (type:string , action:any)=>{
  if(typeof action === 'function'){
    action(type)
  }
}
// It is recommended to keep components stateless and use redux for managing states
const CustomButton = (props: Props) => {
  return (
    <CustomButtonStyles onClick={()=>sendAction(props.item.action , props.action )}>
    <div className={props.item.icon ? 'with-icon' : ''} key={props.item.display} >
        {
            props.item.icon ? switchIcons(props.item.icon) : props.item.display
        } 
    </div>
    </CustomButtonStyles>
  );
};

export default CustomButton;
