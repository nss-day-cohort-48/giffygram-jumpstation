const API = "http://localhost:3000";
const mainContainer = document.querySelector(".giffygram");

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
  userFavorites: []
};

export const getUsers = () => {
  return [...applicationState.allUsers];
};

export const getFiltered = () => {
  // console.log(applicationState.filteredPosts)
  return [...applicationState.filteredPosts]
}

export const filterByUser = (clickedId) => {
  // console.log("clickedId = " + clickedId)
  return fetch(`${API}/posts?userId=${clickedId}`)
  .then(response => response.json())
  .then(data => {
    applicationState.filteredPosts = data
  })
}

export const fetchUsers = () => {
  return fetch(`${API}/users`)
  .then((response) => response.json())
  .then((userData) => {
    applicationState.allUsers = userData;
  });
};

export const sendUsers = (userServiceRequest) => {
  const fetchOptions = {
    method: "POST",
    
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  };
  return fetch(`${API}/users`, fetchOptions)
  .then((response) => response.json())
  .then((response) => {
    localStorage.setItem("gg_user", response.id);
    
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  });
};

export const getPosts = () => {
  return [...applicationState.posts];
};

export const fetchPosts = () => {
  return fetch(`${API}/posts`)
  .then(response => response.json())
  .then(data => {
    applicationState.posts = data
  })
}


export const sendPost = (post) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  }
  
  
  return fetch(`${API}/posts`, fetchOptions)
  .then(response => response.json())
      .then (() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
      })
}


export const deletePost = (id) => {
  return fetch(`${API}/posts/${id}`, {
    method: "DELETE",
  }).then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  });
};

export const getFavoritePosts = () => {
  return [...applicationState.userFavorites]
}


export const sendfavoritePosts = (newFavorited) => {
  return fetch(`${API}/favoritedPosts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newFavorited)
  
  }).then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
  })
}

export const fetchFavoritePosts = () => {
  const userId = localStorage.getItem("gg_user")
  return fetch(`${API}/favoritedPosts?userId=${userId}`)
  .then((response) => response.json())
  .then((userData) => {
    applicationState.userFavorites = userData;
  });
};