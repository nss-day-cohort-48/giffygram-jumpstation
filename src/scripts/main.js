import { GiffyGram } from "./GiffyGram.js";
import { LoginForm } from "./auth/Login.js";
import { CreatePost } from "./feed/CreatePost.js";
import { renderMessages} from "./friends/DirectMessage.js"
import {
  fetchPosts,
  fetchUsers,
  sendPost,
  filterByUser,
  getFiltered,
  deletePost,
  fetchMessages,
  sendfavoritePosts,
  fetchFavoritePosts,
  getFavoritePosts,
  deleteFavoritePost,
  getPosts,
} from "./data/provider.js";
import { renderMessageForm } from "./message/MessageForm.js";

//searches for class of giffygram and saves to mainContainer variable
const mainContainer = document.querySelector(".giffygram");

export const renderApp = () => {
//gets current users id
  const user = parseInt(localStorage.getItem("gg_user"));

  fetchMessages()

//rendering all users
  fetchUsers().then(() => {
    console.log("we have users");
//rendering all posts    
    return fetchPosts()
      .then(() => {
        console.log("we have posts");
//renders all favorite posts of current user and renders giffy feed to show only favorite posts       
        return fetchFavoritePosts().then(() => {
          getFiltered();
          console.log("we have favorite posts");
        });
      })

// if user login credentials exist and logged in render giffygram      
      .then(() => {
        if (user) {
          console.log("user exist");
          mainContainer.innerHTML = GiffyGram();
// if user does not exist or not logged in render login form          
        } else {
          console.log("user doesnt exist");
          mainContainer.innerHTML = LoginForm();
        }
      });
  });
};
//renders dom to show changes
renderApp();
//tells dom state has changed and renders app
mainContainer.addEventListener("stateChanged", (CustomEvent) => {
  renderApp();
});
//renders app
renderApp();
//if object clicked equals create__button createPost variable will
//look for class of .giffygram__feed and render the createPost html form
mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "create__button") {
    const createPost = document.querySelector(".giffygram__feed");
    createPost.innerHTML = `${CreatePost()}`;
  }
});
//announces a state change
mainContainer.addEventListener("stateChanged", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  renderApp();
});
//if object clicked equals submit__button
//title stores post title
//url stores image link
//description stores post description
mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submit__button") {
    const title = document.querySelector("input[name='title']").value;
    const url = document.querySelector("input[name='url']").value;
    const description = document.querySelector(
      "textarea[name='postDescription']"
    ).value;
//currentUser stores the current users id
    const currentUser = parseInt(localStorage.getItem("gg_user"));
//holds the data from user inputs previously
    const newPost = {
      title: title,
      URL: url,
      description: description,
      userId: currentUser,
      timestamp: new Date().toLocaleDateString(),
    };
    console.log(newPost);
//sendPost function sends newPost variable data to database    
    sendPost(newPost);

// if cancel button is clicked DOM will render back to giffy feed    
  } else if (clickEvent.target.id === "cancel__button") {
    renderApp();
  }
});

//if object clicked equals selectName filterByUser function is invoked
//and shows posts only for selected user
mainContainer.addEventListener("change", (event) => {
  if (event.target.id === "selectName") {
    filterByUser(event.target.value);
    renderApp();
  }
});
//if object clicked equals block let id will grab that postId
//and deletePost function will invoke with id as the argument
//deleting the post
mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.name === "block") {
    let id = parseInt(clickEvent.target.id);
    console.log("Test");
    deletePost(id);
  }
});
//if object clicked equals favorite postId and userId are stored
//new favorited places them in an object 
//sendfavoritePosts function invokes with newFavorited as argument
//and sends that data to database
mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.name === "favorite") {
    let postId = parseInt(clickEvent.target.id);
    let userId = parseInt(localStorage.getItem("gg_user"));
    let newFavorited = {
      userId: userId,
      postId: postId,
    };
    sendfavoritePosts(newFavorited);
  }
});
mainContainer.addEventListener(
    "click", clickEvent => {
        if (clickEvent.target.name === "block") {
            let id = parseInt(clickEvent.target.id)
            console.log('Test')
            deletePost(id)
        }
    }
)

mainContainer.addEventListener("click",
(evt) => {
  if(evt.target.id === "notification_count") {
   mainContainer.innerHTML = renderMessages()
  }
})

mainContainer.addEventListener("click",
(evt) => {
  if(evt.target.id === "logo") {
    renderApp()
  }
})
mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.name === "block") {
    let id = parseInt(clickEvent.target.id);
    console.log("Test");
    deletePost(id);
    const favoritePosts = getFavoritePosts();
    const postId = parseInt(clickEvent.target.id);
    const foundFavePostObject = favoritePosts.find((object) => {
      if (postId === object.postId) {
        return true;
      }
    });
    if (foundFavePostObject) {
      const id = foundFavePostObject.id;
      deleteFavoritePost(id);
    } else {
      const userId = parseInt(localStorage.getItem("gg_user"));
      const newFavorited = {
        userId: userId,
        postId: postId,
      };
      sendfavoritePosts(newFavorited);
    }
  }
});
