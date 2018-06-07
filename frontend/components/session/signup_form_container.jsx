import {connect} from 'react-redux';
import{signup, login, removeErrors} from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({errors}) => ({
  errors: errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors())
});


export default connect(mapStateToProps,
  mapDispatchToProps)(SignupForm);
