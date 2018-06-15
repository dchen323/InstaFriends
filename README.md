# Welcome to InstaFriends!

[Live Link](https://instafriends-.herokuapp.com/#/)

[Design Documents](https://github.com/dchen323/InstaFriends/wiki)

InstaFriends is a single page web app inspired by Instagram. Connect with users and share pictures with all your friends and followers. Come join InstaFriends today and share your experiences!

![SignUp Page](http://res.cloudinary.com/dchen3/image/upload/v1529082475/Screen_Shot_2018-06-15_at_10.07.19_AM.png)



## Technology

InstaFriends is built with...
  * Ruby on Rails and PostGreSQL to keep track of the backend data through RESTful API. Since this is a smaller-scale project, Rails was chosen because it provided convenience and speed over scalability.

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

###

### Pictures
  * Users can add pictures to share to their profile or remove them from their profile.
  * You can click on pictures on the user's page to display a bigger picture.

  * Pictures will also show up on the feed of followers.

### Likes
  * Users can like a picture by double clicking the picture or hitting the black heart, changing the heart into a red one.
  * Users can unlike a picture they have previously liked by hitting the red heart icon under the picture.
  * Like counts are displayed below each picture.

### Comments
  * Users can post comments to any pictures.
  * Owner of the picture and the user who posted the comment are able to delete the comment.
  * The pictures comments are displayed under the picture with the commenter.

### Follows
  * Users can follow and unfollow users
  * User's follower and following counts will display on their profile page.
  * Following a user will cause their photo to show up on the main page and for their profile to show up on a sidebar of the main page.

### Search
  * There is a search bar in the navigation bar that users can use to search for other users by username.

### User Profile
  * Each user has a profile that displays all of their photos.
  * The user can add pictures to their profile by using the add photo button.
  * The user's public information are displayed on their profiles.

### Feed
  * The feed displays the pictures of everyone the user follows.
  * The user can navigate to each of the profiles of the people he is following by clicking on their profile picture or username displayed on the sidebar.

## Future Implementations
  * Editing User Info
  * Infinite Scrolling
  * Followers/Following Pages
  * Notifications
  * Explore page
