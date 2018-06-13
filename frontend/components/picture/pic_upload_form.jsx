import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { withRouter } from 'react-router';
import {merge} from 'lodash';

class PictureUploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { picture: {
      img_url: '',
      },
      caption: '',
      modalIsOpen: true
    };
  }

  onImageDrop(files){
    this.setState({uploadedFile: files[0]});
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(window.CLOUDINARY_OPTIONS.cloud_url)
                  .field('upload_preset', window.CLOUDINARY_OPTIONS.upload_preset)
                  .field('file', file);
    upload.end((err,response) => {
      if(err) {
        console.error(err);
      }
      if(response.body.secure_url !== '' ) {
        this.setState({picture: { img_url: response.body.secure_url}});
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let newState = merge({},this.state.picture,
      {caption: this.state.caption});
    this.props.uploadPicture(newState)
      .then(() => this.props.closeModal());
  }

  update(e){
    e.preventDefault();
    this.setState({caption: e.target.value});
  }

  render() {
    return(
      <div className="photo-uploader">
        <form onSubmit={this.handleSubmit.bind(this)}
          className="upload-form">
          <content>Picture Preview</content>
          <img src={this.state.picture.img_url} className="preview-pic"/>
          <textarea type="text" className="caption-box"
            onChange={this.update.bind(this)}
            value={this.state.caption}
            placeholder="Caption...">
          </textarea>
          <div className="dropzone">
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={file => this.onImageDrop(file)}
              className="dropzone-box">
              <p className='upload-button'>Click to select a file to upload.</p>
            </Dropzone>
            <input type="submit" value="Upload"
              className="upload-button"/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(PictureUploadForm);
