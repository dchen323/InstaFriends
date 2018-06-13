import React from 'react';
import {SearchIndexItem} from './search_index_item';


export default class SearchIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      results: []
    };
    this.update = this.update.bind(this);
  }

  update(e){
    e.preventDefault();
    this.setState({query: e.target.value});
  }

  handleSearch(){
    this.props.searchUsers(this.state.query);
  }

  render() {
    let searchList = Object.values(this.props.searchList).map(user => (
      <SearchIndexItem user={user} />
    ));
    return(
      <div>
        <span className="search-span">
          <i className="fas fa-search icon3"></i>
          <form>
            <input type="text" placeholder="Search"
              className="nav-search icon2"
              value={this.state.query}
              onChange={this.update}></input>
          </form>
          <ul className="search-list-container">
            {searchList}
          </ul>
        </span>
      </div>
    );
  }

}
