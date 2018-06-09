import React from 'react';
import PictureUploadFormContainer from '../picture/picture_upload_form_container';

export const UserModal = ({modalType,closeModal}) => {
  if (modalType === "Add Photo"){
    return (
        <div className="photo-modal">
          <h2 className="modal-add" >Add Photo</h2>
          <PictureUploadFormContainer />
          <button onClick={() => closeModal()}
            className="close-modal">Close</button>
        </div>
      );
  }else if (modalType ==="Show Photo"){
    return(<div>Filler</div>);
  }
};
