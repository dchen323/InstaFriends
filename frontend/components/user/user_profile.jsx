import React from 'react';
import {Link} from 'react-router-dom';
import {PictureIndexItems} from '../picture/picture_index_items';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PictureUploadFormContainer from '../picture/picture_upload_form_container';
import {merge} from 'lodash';

let customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: "900px",
    height: "600px"
  }
};


class UserProfile extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      modalType: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    Modal.setAppElement(document.getElementById('photo-add'));
  }

  componentWillReceiveProps(nextProp){
    if(this.props.user && this.props.user.id !== parseInt(nextProp.match.params.userId)){
      this.props.fetchUser(nextProp.match.params.userId);
    }
  }

  openModal(field) {
    return () => {
      this.setState({modalIsOpen:true,
      modalType : field});
    };
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
    if(this.props.user === undefined){
      return (<div></div>);
    }
    let length = Object.values(this.props.pictures).length;
    const pictures = this.props.pictures.map((picture, idx) => (
      <PictureIndexItems key={idx}
        picture={picture}
        openModal={this.openModal}/>
    ));
    let modal;
    if (this.state.modalType === 'Add Photo'){
      customStyles = merge(customStyles, {content: {
        width: "50%", height: "90%", background: "#FAFAFA"
      }});
      modal = (<div className="photo-modal">
                <h2 className="modal-add" >Add Photo</h2>
                <PictureUploadFormContainer />
                <button onClick={this.closeModal}
                  className="close-modal">Close</button>
                </div>);
    }else if (this.state.modalType === 'Show Photo'){
      modal = (<div>Filler</div>);
    }
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
                onClick={this.openModal("Add Photo")}>Add Photo</button>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Modal">
          {modal}
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
