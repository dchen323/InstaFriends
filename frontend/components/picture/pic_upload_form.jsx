import React from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import { withRouter } from "react-router";
import { merge } from "lodash";

class PictureUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: {
        img_url: ""
      },
      caption: "",
      modalIsOpen: true
    };
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    const cloudinaryOptions = this.getCloudinaryOptions();
    let upload = request
      .post(cloudinaryOptions[0])
      .field("upload_preset", cloudinaryOptions[1])
      .field("file", file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== "") {
        this.setState({ picture: { img_url: response.body.secure_url } });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newState = merge({}, this.state.picture, {
      caption: this.state.caption
    });
    this.props.uploadPicture(newState).then(() => this.props.closeModal());
  }

  update(e) {
    e.preventDefault();
    this.setState({ caption: e.target.value });
  }

  getCloudinaryOptions() {
    if (process.env.NODE_ENV !== "production") {
      const { cloudURL, uploadPreset } = require("../secret");
      return [cloudURL, uploadPreset];
    } else {
      return [CLOUD_URL, UPLOAD_PRESET];
    }
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="upload-form flex-col-null-center"
        >
          <content>Picture Preview</content>
          <img src={this.state.picture.img_url} className="preview-pic" />
          <textarea
            type="text"
            className="caption-box"
            onChange={this.update.bind(this)}
            value={this.state.caption}
            placeholder="Caption..."
          />
          <div className="dropzone">
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={file => this.onImageDrop(file)}
              className="dropzone-box"
            >
              <p className="upload-button flex-row-center-center">
                Click to select a file to upload.
              </p>
            </Dropzone>
            <input
              type="submit"
              value="Upload"
              className="upload-button flex-row-center-center"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(PictureUploadForm);
