import React from 'react';

export default class EditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.picture;
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.updatePicture(this.state);
    window.location = `/#/user/${this.state.picture.userId}`;
  }

  update(e){
    e.preventDefault();
    this.setState({caption: e.target.value});
  }

  render() {
    if (this.props.picture === null) {
      return(<div></div>);
    }

    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea className="edit-picture"
            value={this.state.caption}></textarea>
          <input type="submit" value="Edit Post"/>
        </form>
      </div>
    );
  }
}
