import React from 'react';



export default class PictureIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.picture;
  }

  updateCaption(e){
    e.preventDefault();
    this.props.updatePicture(this.state);
  }

  update(e){
    return(
      this.setState({caption: e.target.value})
    );
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
          <div>
            <form onSubmit={this.updateCaption.bind(this)}
              className="pic-show-edit">
              <h2 className="pic-show-username">{this.props.user.username}</h2>
              <textarea type="text" value={this.state.caption}
                onChange={this.update.bind(this)}
                className="input-show-box"
                disabled={disabled}
                placeholder="caption..."></textarea>
              <input type="submit" value="Edit Picture"
                className={`pic-show-button ${disabled}`}/>
            </form>
          </div>
        </div>

      </div>
    );
  }
}
