import {connect} from 'react-redux';
import {NavBar} from './nav_bar';

const mapStateToProps = ({session}) => ({
  sessionId: session.id
});

export default connect(mapStateToProps)(NavBar);
