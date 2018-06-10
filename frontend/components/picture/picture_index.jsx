import React from 'react';



export default class PictureIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProp){
    if(this.props.pictures && this.props.picture.id !== parseInt(
        nextProp.match.params.pictureId) || this.props.user &&
        this.props.user.id !==
        parseInt(nextProp.match.params.userId)){
          this.props.fetchPicture(nextProp.match.params.userId,
          nextProp.match.params.pictureId);
        }
  }

  render() {
    // debugger
    if (this.props.picture === undefined){
      return (<div></div>);
    }
    return(
      <div className="picture-show-container">
        <img src={this.props.picture.imgUrl} className="display-picture"/>
        <div className="pic-show-info">
          <header className="pic-show-header">
            <img src={this.props.user.imgUrl} className="pic-show-userpic"/>
            <h2>{this.props.user.username}</h2>
            <button className="pic-show-button">Edit Picture</button>
            <button className="pic-show-button">Delete Picture</button>
          </header>
        </div>

      </div>
    );
  }
}
