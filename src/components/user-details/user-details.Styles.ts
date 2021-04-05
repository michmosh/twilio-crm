import { default as styled } from 'react-emotion';

export const UserDetailsComponentStyles = styled('div')`
  padding: 0.5rem;
  margin-left:1rem;
  font-size:1.3em;
  display:flex;
  justify-content:flex-end;
  .identification{
      color:black;
  }
  .brand {
    background-color: crimson;
    border-radius: 25%;
    padding:0.1rem 0.3rem;
    font-size:0.9em;
    color:white;
  }
  .black-text {
    color:black;
  }
  .light-blue-text{
    color:#3AB9E2;
  }
  .gold-text {
    color:#FFA90C;
  }
  .padding-bottom {
      padding-bottom: 0.2rem;
  }
`;
