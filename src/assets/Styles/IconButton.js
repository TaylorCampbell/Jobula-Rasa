import styled from "styled-components";

const IconButton = styled.button`
  border-radius: 3px;
  width: 50px;
  height: 50px;
  border: none;
  padding: 7px;
  margin: 0px;

  :hover {
    background: rgba(255, 255, 255, .1);
  }
  
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "transparent"};
  color: ${props => props.primary ? "white" : ""};
`;

export default IconButton;