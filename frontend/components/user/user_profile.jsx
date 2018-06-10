import React from 'react';
import {PictureIndexItems} from '../picture/picture_index_items';
import Modal from 'react-modal';
import {UserProfileInfo} from './user_profile_info';
import {UserModal} from '../modal/modal';
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
    height: "500px"
  }
};

class UserProfile extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      modalType: '',
      e: ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    Modal.setAppElement(document.getElementById('user'));
  }

  componentWillReceiveProps(nextProp){
    if(this.props.user && this.props.user.id !== parseInt(nextProp.match.params.userId)){
      this.props.fetchUser(nextProp.match.params.userId);
    }
  }

  openModal(field,key) {
    return () => {
      this.setState({modalIsOpen: true,
              modalType: field,
              e: key});
    };
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    window.location = `/#/user/${this.props.user.id}`;
  }

  render(){
    if(this.props.user === undefined){
      return (<div></div>);
    }
    const pictures = this.props.pictures.map(picture => (
      <PictureIndexItems key={picture.id}
        picture={picture}
        openModal={this.openModal}
        pictureId={picture.id}/>
    ));
    if (this.state.modalType === "Add Photo"){
      customStyles = merge(customStyles, {content: {width: "50%", height: "95%",
                  background: "#FAFAFA"
        }});
    }else{
      customStyles = merge(customStyles, {content: {width: "900px",
        height: "500px"}});
    }
    return(
      <div className="user">
        <header className="profile-box">
          <img src={this.props.user.imgUrl} className="user-pic"/>
          <div className="user-content">
            <UserProfileInfo openModal={this.openModal}
              username={this.props.user.username}
              length={this.props.pictures.length}
              name={this.props.user.name}
              currentUser={this.props.user.id === this.props.sessionId}/>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Modal"
              style={customStyles}>
            <UserModal modalType={this.state.modalType}
              closeModal={this.closeModal}
              openModal={this.openModal}
              pictureId={this.state.e}
              userId={this.props.user.id}/>
          </Modal>
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
