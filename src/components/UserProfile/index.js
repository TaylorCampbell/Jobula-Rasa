import React from "react";

import { Link } from "react-router-dom";
import * as ROUTES from "../../lib/constant/routes";
// import { FirebaseContext, withFirebase } from '../Firebase';

import Button from "react-bootstrap/Button";



const UserProfileButton = () => (
  <Link to={ROUTES.USER_PROFILE}> 
    <Button variant="link">Sign Out</Button>
  </Link>
);

export { UserProfileButton };
