import styled from "styled-components";

import BSButton from "react-bootstrap/Button";

const AddCardButton = styled(BSButton)`
  border-radius: 3px;
  border: none;
  padding: 7px;
  margin: 0px;
  height: 4em;
  width: 4em;
  margin-top: 16px;

  :hover {
    background: #00E4B1;
  }

  :active {
    background: #00a6bd !important;
  }
  
  /* Adapt the colors based on primary prop */
  background: ${props => props.variant === "primary" ? "#5DF7B8" : "transparent"};
  color: ${props => props.variant === "primary" ? "black" : ""};
`;

export default AddCardButton;