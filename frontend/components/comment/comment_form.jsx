import React from "react";
import { merge } from "lodash";

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      inputFocus: this.props.inputFocus
    };

    this.update = this.update.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.inputFocus !== prevState.inputFocus) {
      return {
        inputFocus: nextProps.inputFocus
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.inputFocus !== prevProps.inputFocus) {
      this.myInp.focus();
    }
  }

  update(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newState = merge({}, this.state);
    newState.picture_id = this.props.pictureId;
    this.props.postComment(newState);
    this.setState({ body: "" });
  }

  render() {
    console.log(this.state.inputFocus, this.myInp);
    return (
      <div className="comments-form-container">
        <form className="comments-form" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            className="comments-box"
            value={this.state.body}
            onChange={this.update}
            placeholder="Add Comment..."
            ref={ip => (this.myInp = ip)}
          />
        </form>
      </div>
    );
  }
}
