import React from 'react';
import EditPictureFormContainer from './edit_picture_form_container';


export default class PictureIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    if (this.props.picture === undefined){
      return (<div></div>);
    }
    let disabled;
    if(this.props.picture.userId !== this.props.sessionId){
      disabled = "hide-button";
    }
    return(
      <div className="picture-show-container">
        <img src={this.props.picture.imgUrl} className="display-picture"/>
        <div className="pic-show-info">
          <header className="pic-show-header">
            <img src={this.props.user.imgUrl} className="pic-show-userpic"/>
            <h2>{this.props.user.username}</h2>
            <button className={`pic-show-button ${disabled}`}>Delete Picture</button>
          </header>
          <EditPictureFormContainer picture={this.props.picture}
            disabled={disabled} user={this.props.user}/>
        </div>
      </div>
    );
  }
}
