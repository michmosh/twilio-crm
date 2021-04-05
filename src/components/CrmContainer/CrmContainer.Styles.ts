import { default as styled } from 'react-emotion';
export const CustomCrmContainerComponentStyles = styled('div')`
  height:100%;
  direction:rtl;
  font-family:sans-serif;
  .wrapper {
      padding:1rem;
  }
  .top {
    display: flex;
    justify-content: space-between;
  }
  .top .button-wrapper{
      display:flex;
      flex-wrap: wrap;
      gap : 2rem;
  }
  hr {
    border-color:#f8fafc
  }
`;