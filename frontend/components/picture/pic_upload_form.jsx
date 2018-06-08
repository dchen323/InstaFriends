import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

export default class PictureUploadForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      uploadFileCloudinaryURL: ''
    };
  }

  onImageDrop(files){
    this.setState({uploadedFile: files[0]});
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(window.cloudinary_options.cloud_url)
                  .field('upload_preset', window.cloudinary_options.upload_preset)
                  .field('file', file);
    upload.end((err,response) => {
      if(err === null ) {
        this.setState({uploadFileCloudinaryUrl: response.body.secure_url});
      }
    });
  }
  render() {
    return(
      <Dropzone
        multiple={false}
        accept=".jpg,.png"
        onDrop={file => this.onImageDrop(file)}>
        <p>Drop an image or click to select a file to upload.</p>
      </Dropzone>
    );
  }
}
