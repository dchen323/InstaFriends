import React from "react";
import PictureUploadFormContainer from "../picture/picture_upload_form_container";
import PictureIndexContainer from "../picture/picture_index_container";

import Follows from "../follow/Follows";

export const UserModal = ({ modalType, closeModal, pictureId, userId }) => {
  if (modalType === "Add Photo") {
    return (
      <div className="photo-modal flex-col-null-center">
        <h2 className="modal-add">Add Photo</h2>
        <PictureUploadFormContainer closeModal={closeModal} />
        <button onClick={() => closeModal()} className="close-modal">
          Close
        </button>
      </div>
    );
  } else if (modalType === "Show Photo") {
    window.location = `/#/user/${userId}/pictures/${pictureId}`;
    return (
      <PictureIndexContainer
        pictureId={pictureId}
        userId={userId}
        closeModal={closeModal}
      />
    );
  } else if (modalType === "Followers") {
    return (
      <Follows status="followers" title="Followers" closeModal={closeModal} />
    );
  } else if (modalType === "Following") {
    return (
      <Follows status="following" title="Following" closeModal={closeModal} />
    );
  }
};
