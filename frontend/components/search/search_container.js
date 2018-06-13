import {connect} from 'react-redux';
import SearchIndex from './search_index';
import {searchUsers} from '../../actions/search_actions';


const mapStateToProps = ({entities: {searchList}}) => ({
  searchList: searchList
});

const mapDispatchToProps = dispatch => ({
  searchUsers : query => dispatch(searchUsers(query))
});


export default connect(mapStateToProps,mapDispatchToProps)(SearchIndex);
