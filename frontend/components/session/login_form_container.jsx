import {connect} from 'react-redux';
import React from 'react';
import {login} from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({errors}) => ({
  errors: errors.session
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps,
  mapDispatchToProps)(LoginForm);
