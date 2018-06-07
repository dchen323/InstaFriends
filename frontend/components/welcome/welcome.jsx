import React from 'react';
import SignupFormContainer from '../session/signup_form_container';


const Welcome = ({currentUser,logout,history}) => (
    <div>
      <h1>Main show page filler</h1>
      <h2>Hi,{currentUser.username}</h2>
      <button onClick={() => logout().then(() => history.push('/login'))}>Logout</button>
    </div>


);

export default Welcome;

// upload(e){
//   e.preventDefault();
//   cloudinary.openUploadWidget(window.cloudinary_options,
//     (error,images) => {
//       if (error === null){
//
//       }
//     });
//   }
