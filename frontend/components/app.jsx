import React from 'react';
import{Route,Redirect,Switch,Link} from 'react-router-dom';
import WelcomeContainer from './welcome/welcome_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';

const App = () => (
  <div>
    <main>
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <ProtectedRoute path="/" component={WelcomeContainer}/>
      </Switch>
    </main>
  </div>
);

export default App;
