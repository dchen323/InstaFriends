import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import NavBarContainer from "./navbar/nav_bar_container";
import WelcomeContainer from "./welcome/welcome_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import UserProfileContainer from "./user/user_profile_container";
import PictureIndexContainer from "./picture/picture_index_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

const App = () => (
  <div>
    <main>
      <ProtectedRoute path="/" component={NavBarContainer} />
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/user/:userId" component={UserProfileContainer} />
        <ProtectedRoute path="/" component={WelcomeContainer} />
      </Switch>
    </main>
  </div>
);

export default App;
