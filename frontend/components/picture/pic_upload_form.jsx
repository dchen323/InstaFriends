import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

export default class PictureUploadForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      uploadFileCloudinaryURL: '',
      caption: ''
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
        this.setState({uploadFileCloudinaryUrl: response.body.secure_url});
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.uploadPicture(this.state).then(() => this.props.history
      .push(`/users/${this.props.match.params.userId}`));
  }

  update(field){
    return e => this.setState({[field]: e.target.value});
  }

  render() {
    return(
      <div className="photo-uploader">
        <content>Picture Preview</content>
        <img src={this.state.uploadFileCloudinaryUrl} className="preview-pic"/>
        <form onSumbit={this.handleSubmit.bind(this)}>
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={file => this.onImageDrop(file)}
            className>
            <p className='upload-button'>Click to select a file to upload.</p>
            <input type="text" className="caption-box"
              onChange={this.update("caption").bind(this)}
              value ={this.state.caption}></input>
            <input type="submit" value="Upload"/>
          </Dropzone>
        </form>
      </div>
    );
  }
}
