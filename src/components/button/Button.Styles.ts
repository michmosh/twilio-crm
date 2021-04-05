import { default as styled } from 'react-emotion';
export const CustomButtonStyles = styled('div')`
div{
   background-color:#5B9BD5;
   padding:0.5rem;
   border-radius:5px;
   color:white;
   cursor:pointer;
   max-height: 2rem;
   &:hover{
      background-color:#1c78c9;
      
   }
}
 .with-icon {
   background-color: silver;
    color: black;
    border-radius: 50%;
    &:hover{
      background-color:grey;
   }
 }
`;