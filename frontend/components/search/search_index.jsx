import React from 'react';
import {SearchListItem} from './search_list_item';



export default class SearchIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      query: '',
      focus: false
    };
    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSearch(){
    this.props.searchUsers(this.state.query);
  }

  update(e){
    e.preventDefault();
    this.setState({query: e.target.value, focus: true},
      () => {
        this.handleSearch();
      });
  }

  handleBlur(){
    setTimeout(() => this.setState({focus: false}),150);
  }

  render() {
    let hide;
    if(this.props.searchList === {} || !this.state.focus){
      hide="hide-button";
    }
    let searchList = Object.values(this.props.searchList).map(user => (
      <SearchListItem key={user.id} user={user}
        hide={hide}/>
    ));
    return(
      <div>
        <span className="search-span">
          <i className="fas fa-search icon3"></i>
          <form>
            <input type="text" placeholder="Search"
              className="nav-search icon2"
              value={this.state.query}
              onChange={this.update}
              onBlur={this.handleBlur} />
          </form>
        </span>
        <ul className="search-list-container">
          {searchList}
        </ul>
      </div>
    );
  }

}
