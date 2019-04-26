import styled from "styled-components";

const IconButton = styled.button`
  border-radius: 3px;
  border: none;
  padding: 7px;
  margin: 0px;
  min-height: 50px;

  :hover {
    background: rgba(255, 255, 255, .1);
  }

  .home {
    margin-top: 3px;
  }
  
  /* Adapt the colors based on primary prop */
  background: ${props => props.varient === "primary" ? "palevioletred" : "transparent"};
  color: ${props => props.varient === "primary" ? "white" : "black"};
`;

export default IconButton;