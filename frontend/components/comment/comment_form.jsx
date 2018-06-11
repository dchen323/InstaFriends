import React from 'react';
import {merge} from 'lodash';

export default class CommentForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      body: '',
      inputFocus: this.props.inputFocus
    };
  }

  componentWillReceiveProps(nextProp){
    if(nextProp.inputFocus){
      this.myInp.focus();
    }
  }

  update(e){
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let newState = merge({},this.state);
    newState.picture_id = this.props.pictureId;
    this.props.postComment(newState);
    this.setState({body: ''});
  }

  render() {
    return(
      <div className="comments-form-container">
        <form className="comments-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" className="comments-box" value={this.state.body}
            onChange={this.update.bind(this)}
            placeholder="Add Comment..."
            ref={ip => this.myInp = ip}/>
        </form>
      </div>
    );
  }

}
