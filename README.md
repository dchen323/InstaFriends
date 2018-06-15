# Welcome to InstaFriends!

[Live Link](https://instafriends-.herokuapp.com/#/)

InstaFriends is a single page web app inspired by Instagram. Connect with users and share pictures with all your friends and followers. Come join InstaFriends today and share your experiences!

![DEMO](http://res.cloudinary.com/dchen3/image/upload/v1529096473/intro.gif)



## Technology

InstaFriends is built with...
  * Ruby on Rails and PostGreSQL are used to keep track of the backend data through RESTful API. Since this is a smaller-scale project, Rails was chosen because it provided convenience and speed over scalability.

  * React.js/Redux are used to manage the frontend DOM and interactions with the backend by keeping states normalized.

  * Pictures are hosted using [Cloudinary](https://cloudinary.com/)


## Key Features

  * Frontend to backend user authentication through BCrypt.
  * Users can post and delete pictures to their page.
  * Users can follow and unfollow other users.
  * User's feed will display pictures from other users that they follow.
  * Users can like and unlike pictures from the site.
  * Users are able to comment and delete their own comments from pictures.
  * Search bar can be used to search for other users by username.

### Pictures
Users can add pictures to share to their profile or remove them from their profile dynamically through Redux changing state immediately and React rendering the new state without any additional DOM manipulations.

You can click on pictures on the user's page to display a bigger picture.

![Add Photos](https://res.cloudinary.com/dchen3/image/upload/v1529092320/FullstackPicturesSeedData/ezgif.com-optimize.gif)

![DeletePhoto](http://res.cloudinary.com/dchen3/image/upload/v1529092795/deletepicture.gif)

The picture upload form and picture view form were both created using [React-Modal](https://github.com/reactjs/react-modal). To render two modals, a modal type state had to be set in order to conditionally render the appropriate modal like so :

  ```javascript
    this.state = {
    modalIsOpen: false,
    modalType: '',
    value: ''
  };

  ...

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
  ```

### Likes
Users can like a picture by double clicking the picture or hitting the black heart, changing the heart into a red one.

![dbclick](http://res.cloudinary.com/dchen3/image/upload/v1529095380/dclick.gif)

### Search
Users can use the search the site for usernames that match their search query.
![search](http://res.cloudinary.com/dchen3/image/upload/v1529096987/search.gif)

A problem I ran into with the search bar was hiding the search results if the results were empty and if you click out of the search box. To tackle this issue, I set a focus state on my search index component that would change upon actions:

``` javascript
constructor(props){
  super(props);
  this.state = {
    query: '',
    focus: false
  };

  update(e){
    e.preventDefault();
    this.setState({query: e.target.value, focus: true},
      () => {
        this.handleSearch();
      });
  }

  handleBlur(){
    setTimeout(() => this.setState({focus: false}),150);
  }

  render() {
    let hide;
    if(this.props.searchList === {} || !this.state.focus){
      hide = "hide-button";
    }
    ...
    <input type="text" placeholder="Search"
      className="nav-search icon2"
      value={this.state.query}
      onChange={this.update}
      onBlur={this.handleBlur} />
    ...

  export const SearchListItem = ({user,hide}) => {
    return(
      <li className={`search-list-item ${hide}`}>
    ...
```

I had set a class on the search items that would cause it to hide when if it was either empty or if the text box was exited. A setTimeout is used to delay the removal of the search items, which allowed users to click on the list item they wanted. Without the setTimeout or with a lower delay, users were not able to click on the search items, due to React changing the state faster than the registered clicks.

## Additional Resources
  * [Database Schema](https://github.com/dchen323/InstaFriends/wiki/Database-Schema)
  * [API Endpoints/Routes](https://github.com/dchen323/InstaFriends/wiki/Routes)
  * [Proposal Wireframes](https://github.com/dchen323/InstaFriends/wiki/Component-Hierarchy)



## Future Features
  * Editing User Info
  * Infinite Scrolling
  * Followers/Following Pages
  * Notifications
  * Explore page
  * Video Stories
