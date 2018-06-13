import React from 'react';
import {SearchListItem} from './search_list_item';



export default class SearchIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: ''
    };
    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(){
    this.props.searchUsers(this.state.query);
  }

  update(e){
    e.preventDefault();
    this.setState({query: e.target.value},
      () => {
        this.handleSearch();
      });
  }


  render() {
    let searchList = Object.values(this.props.searchList).map(user => (
      <SearchListItem key={user.id} user={user} />
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
        </span>
        <ul className="search-list-container">
          {searchList}
        </ul>
      </div>
    );
  }

}
