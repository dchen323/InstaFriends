import { connect } from "react-redux";
import { NavBar } from "./nav_bar";

const mapStateToProps = ({ session: { user } }) => ({
  sessionId: user.id
});

export default connect(mapStateToProps)(NavBar);
