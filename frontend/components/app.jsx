import React from 'react';
import{Route,Redirect,Switch,Link} from 'react-router-dom';
import WelcomeContainer from './welcome/welcome_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import {AuthRoute} from '../utils/route_util';

const App = () => (
  <div>
    <main>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <Route exact path="/" component={WelcomeContainer}/>
    </main>
  </div>
);

export default App;
