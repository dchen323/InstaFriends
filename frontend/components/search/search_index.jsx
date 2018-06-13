import React from 'react';
import {SearchListItem} from './search_list_item';



export default class SearchIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      results: []
    };
    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(){
    this.props.searchUsers(this.state.query);
  }

  update(e){
    e.preventDefault();
    this.setState({query: e.target.value});
    this.handleSearch();
  }


  render() {
    debugger
    let searchList = Object.values(this.props.searchList).map(user => (
      <SearchListItem user={user} />
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
