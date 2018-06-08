import React from 'react';
import {Link} from 'react-router-dom';
import {PictureIndexItem} from '../picture/picture_index_item';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PictureUploadForm from '../picture/pic_upload_form';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class UserProfile extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    Modal.setAppElement(document.getElementById('photo-add'));
  }

  componentWillReceiveProp(nextProp){
    if(this.props.user.id !== nextProp.match.params.userId){
      this.props.fetchUser(nextProp.match.params.userId);
    }
  }

  openModal() {
    this.setState({modalIsOpen:true});
  }

  afterOpenModal(){
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
    let length = Object.values(this.props.pictures).length;
    const pictures = Object.values(this.props.pictures).map(picture => (
      <PictureIndexItem
        picture={picture} />
    ));
    return(
      <div className="user">
        <header className="profile-box">
          <img src={this.props.user.imgUrl} className="user-pic"/>
          <div className="user-content">
            <div className="user-content1">
              <h3 className="profile-username">{this.props.user.username}</h3>
              <button className="edit-profile">Edit Profile</button>
              <i className="fas fa-cog icon4"></i>
            </div>
            <div className="user-content2">
              <h4 className="user-info">{length} posts</h4>
              <h4 className="user-info">0 followers</h4>
              <h4 className="user-info"> 2 following</h4>
            </div>
            <div className="user-content3">
              <h4 className="user-name">{this.props.user.name}</h4>
              <button className="add-photo" id="photo-add"
                onClick={this.openModal}>Add Photo</button>
                <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Add Photo"
          >

            <h2 ref={subtitle => this.subtitle = subtitle}>Add Photo</h2>
            <PictureUploadForm />
            <button onClick={this.closeModal}>Close</button>
          </Modal>
            </div>
          </div>
        </header>
        <footer className="profile-footer">
          <h4 className="user-info">Posts</h4>
          <h4 className="user-info">Saved</h4>
        </footer>
        <content className="picture-container">
          <ul className="picture-holder">
            {pictures}
          </ul>
        </content>
      </div>
    );
  }
}

export default UserProfile;
