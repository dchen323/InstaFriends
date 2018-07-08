import React from 'react';

export default class EditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.picture;
  }


  updateCaption(e){
    e.preventDefault();
    this.props.updatePicture(this.state);
  }

  update(e){
    e.preventDefault();
    this.setState({caption: e.target.value});
  }

  render() {
    let outline;
    if(!this.props.disabled){
      outline = "outline";
    }
    return(
      <div>
        <form onSubmit={this.updateCaption.bind(this)}
          className="pic-show-edit">
          <h2 className="pic-show-username">{this.props.user.username}</h2>
          <textarea type="text" value={this.state.caption ? this.state.caption : ""}
            onChange={this.update.bind(this)}
            className={`input-show-box ${outline}`}
            disabled={this.props.disabled}
            placeholder="caption..."></textarea>
          <input type="submit" value="Edit Caption"
            className={`pic-show-button ${this.props.disabled}`}/>
        </form>
      </div>
    );
  }
}
