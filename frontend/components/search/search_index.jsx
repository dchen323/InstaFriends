import React from "react";
import { SearchListItem } from "./search_list_item";
import { debounce, throttle } from "throttle-debounce";

export default class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      focus: false
    };
    this.update = this.update.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.clearSearch = this.clearSearch.bind(this);

    this.debounceSearch = debounce(500, this.handleSearch);
    this.throttleSearch = throttle(500, this.handleSearch);
  }

  handleSearch(query) {
    this.props.searchUsers(query);
  }

  clearSearch() {
    this.setState({ query: "" });
  }

  update(e) {
    e.preventDefault();
    this.setState({ query: e.target.value, focus: true }, () => {
      const query = this.state.query;
      if (query.length < 6) {
        this.throttleSearch(query);
      } else {
        this.debounceSearch(query);
      }
    });
  }

  handleBlur() {
    setTimeout(() => this.setState({ focus: false }), 150);
  }

  render() {
    let hide;
    if (!this.state.query.length || !this.state.focus) {
      hide = "hide-button";
    }
    let searchList = Object.values(this.props.searchList).map(user => (
      <SearchListItem
        key={user.id}
        user={user}
        hide={hide}
        clearSearch={this.clearSearch}
      />
    ));
    return (
      <div>
        <span className="search-span">
          <i className="fas fa-search icon3 flex-row-center-center" />
          <form>
            <input
              type="text"
              placeholder="Search"
              className="nav-search icon2"
              value={this.state.query}
              onChange={this.update}
              onBlur={this.handleBlur}
            />
          </form>
        </span>
        <ul className={`search-list-container ${hide}`}>{searchList}</ul>
      </div>
    );
  }
}
