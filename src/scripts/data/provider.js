const API = "http://localhost:3000";
const mainContainer = document.querySelector(".giffygram");
//initializes empty values for applicationState
const applicationState = {
  currentUser: {},
  feed: {
    chosenUser: null,
    displayFavorites: false,
    displayMessages: false,
  },
  allUsers: [],
  allPosts: [],
  filteredPosts: [],
  userFavorites: [],
};
//getUsers function returns a copy of allUsers in applicationState
export const getUsers = () => {
  return [...applicationState.allUsers];
};
//getFiltered function returns a copy of filteredPosts in applicationState
export const getFiltered = () => {
  return [...applicationState.filteredPosts];
};
//filterByUser function takes parameter of clickedId(userId clicked from dropdown)
export const filterByUser = (clickedId) => {
  
  //fetches posts where userId equals clickedId from database
  return fetch(`${API}/posts?userId=${clickedId}`)
  //converts raw data into json
  .then((response) => response.json())
  .then((data) => {
      //stores that data as applicationState.filteredPosts
      applicationState.filteredPosts = data;
    });
};
export const fetchUsers = () => {
  //fetchUsers function returns users from database
  return fetch(`${API}/users`)
  //converts raw data into json
  .then((response) => response.json())
  .then((userData) => {
      //stores that data as applicationState.allUsers
      applicationState.allUsers = userData;
    });
};

export const sendUsers = (userServiceRequest) => {
//user object passed as argument to send users and stores that object in database 
  const fetchOptions = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  };

  //fetches users and new user
  return fetch(`${API}/users`, fetchOptions)
  //converts raw data to json
  .then((response) => response.json())
  //sets localStorage to newly created user
  .then((response) => {
      localStorage.setItem("gg_user", response.id);

      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

export const getPosts = () => {
  // iterate the post
  const modifiedPosts = applicationState.posts.map((post) => {
    // determine if current post is Favorited
    const fave = applicationState.userFavorites.find((favoritePost) => {
      return post.id === favoritePost.postId;
    });
    // if it is add a property of favorited and set it to true
    if (fave) {
      post.favorited = true;
    } else {
      // if it is not add a property of favorited and set it to false
      post.favorited = false;
    }
    return post;
  });
  //then return the array of modified posts
  return modifiedPosts;
};
export const fetchPosts = () => {
  //fetches all posts from database
  return fetch(`${API}/posts`)
  //converts raw data to json
  .then((response) => response.json())
  //stores data as applicationState.posts
  .then((data) => {
      applicationState.posts = data;
    });
};
//post object passed as argument to send post and stores that object in database 
export const sendPost = (post) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  };
//returns all posts from database
return fetch(`${API}/posts`, fetchOptions)
//converts raw data to json
.then((response) => response.json())
//alerts the main container that there has been a change in state
.then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

export const fetchMessages = () => {
//returns all messages from database
  return fetch(`${API}/messages`)
//converts raw data to json  
    .then((response) => response.json())
//stores messages in applicationState.allMessages
    .then((message) => (applicationState.allMessages = message));
};
//message object passed as argument to send message and stores that object in database
export const postMessage = (message) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(message),
  };
//returns all messages from database  
  return fetch(`${API}/messages`, fetchOptions)
//converts raw data into json
    .then((response) => response.json())
//alerts the main container that there has been a change in state
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};
//function takes a parameter of post id
export const deletePost = (id) => {
//returns the post with matching id from database
  return fetch(`${API}/posts/${id}`, {
//delete method will remove the object from database
    method: "DELETE",
//alerts the main container that there has been a change in state
  }).then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  });
};
//returns a copy of the userFavorites applicationState
export const getFavoritePosts = () => {
  return [...applicationState.userFavorites];
};

//function takes a parameter of newFavorited
export const sendfavoritePosts = (newFavorited) => {
//returns the favoritedPosts from database  
  return fetch(`${API}/favoritedPosts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
//converting json data into raw data    
    body: JSON.stringify(newFavorited),
  })
    .then((res) => res.json())
    .then((res) => {
      //alerts main container that there has been a change in state    
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

export const fetchFavoritePosts = () => {
//searches localStorage for the current user and stores in variable userId
  const userId = localStorage.getItem("gg_user");
//returns favoritedPosts userId that is equal to current user id 
  return fetch(`${API}/favoritedPosts?userId=${userId}`)
//converting raw data into json
  .then((response) => response.json())
//storing data in applicationState.userFavorites
  .then((userData) => {
      applicationState.userFavorites = userData;
    });
};

export const deleteFavoritePost = (id) => {
  return fetch(`${API}/favoritedPosts/${id}`, {
    method: "DELETE",
  }).then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  });
};
