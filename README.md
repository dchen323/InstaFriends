# Weclome to InstaFriends!

InstaFriends is a single page web app inspired by Instagram. Connect with users and share pictures with all your friends and followers. Come join InstaFriends today and share your experiences!

[Live Link](https://instafriends-.herokuapp.com/#/)

[Design Documents](https://github.com/dchen323/InstaFriends/wiki)

## Technology

InstaFriends is built with...
  * Ruby on Rails and PostGreSQL to keep track of the backend data through RESTful API.

  * React/Redux to manage the frontend DOM and interactions with the backend.


## Key Features

### User Authentication
  * User can create new account and log in with existing accounts.
  * Demo user available for users to demo the site without signing up.

### Pictures
  * Users can add pictures to share to their profile or remove them from their profile.
  * Users can add and edit the caption of the picture.
  * You can click on pictures on the user's page to display a bigger picture.
  * Hovering over each picture will display the number of likes and comments it has.
  * Pictures will also show up on the feed of followers.
  * Pictures are hosted using [Cloudinary](https://cloudinary.com/)

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
  * Infinite Scrolling for quicker user feed page rendering.
  * Followers/Following Pages to display who the user is following and who follows the user.
  * Notifications to allow the user to see activities that affect him/her.
  * Explore page to display pictures that the users might be interested in.
