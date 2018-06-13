import React from 'react';
import PictureUploadFormContainer
  from '../picture/picture_upload_form_container';
import PictureIndexContainer
  from '../picture/picture_index_container';

export const UserModal = ({modalType, closeModal, pictureId, userId}) => {
  if (modalType === "Add Photo"){
    return (
        <div className="photo-modal">
          <h2 className="modal-add" >Add Photo</h2>
          <PictureUploadFormContainer
            closeModal={closeModal} />
          <button onClick={() => closeModal()}
            className="close-modal">Close</button>
        </div>
      );
  }else if (modalType ==="Show Photo"){
    window.location = `/#/user/${userId}/pictures/${pictureId}`;
    return(
      <PictureIndexContainer pictureId={pictureId}
        userId={userId}
        closeModal={closeModal}/>
    );
  }
};
