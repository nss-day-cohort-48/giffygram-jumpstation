
import { GiffyGram } from "./GiffyGram.js"
import {LoginForm} from "./auth/Login.js"
import { CreatePost } from "./feed/CreatePost.js"
import { fetchPosts, fetchUsers, sendPost, filterByUser, getFiltered, deletePost } from "./data/provider.js";


const mainContainer = document.querySelector(".giffygram");


export const renderApp = () => {

    const user = parseInt(localStorage.getItem("gg_user"))

  fetchUsers().then(
      () => {
        fetchPosts().then(() => {
            getFiltered()
        })
        .then(() => {

    if (user) {
      console.log("user exist");
      mainContainer.innerHTML = GiffyGram();
    } else {
      console.log("user doesnt exist");
      mainContainer.innerHTML = LoginForm();
    }
    })
  });
};

renderApp();


mainContainer.addEventListener(
    "stateChanged",
    CustomEvent => {
        renderApp()
    }
)

renderApp()

mainContainer.addEventListener(
    "click", clickEvent => {
        if (clickEvent.target.id === "create__button") {
            const createPost = document.querySelector(".create__post")
            createPost.innerHTML = `${CreatePost()}`
            
        }
    }
)
mainContainer.addEventListener("stateChanged", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  renderApp();
});

mainContainer.addEventListener(
    "click", clickEvent => {
        if (clickEvent.target.id === "submit__button") {
            const title = document.querySelector("input[name='title']").value
            const url = document.querySelector("input[name='url']").value
            const description = document.querySelector("input[name='description']").value

            const currentUser = parseInt(localStorage.getItem("gg_user"))



            const newPost = {
                title: title,
                URL: url,
                description: description,
                userId: currentUser,
                timestamp: new Date().toLocaleDateString()
            }
            console.log(newPost)
            sendPost(newPost)
        }
        else if (clickEvent.target.id === "cancel__button") {
            renderApp()
        }
    }
)

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "selectName") {
            filterByUser(event.target.value)
            console.log("user Id = " + event.target.value)
            renderApp()
        }
    }
)

mainContainer.addEventListener(
    "click", clickEvent => {
        if (clickEvent.target.name === "block") {
            let id = parseInt(clickEvent.target.id)
            console.log('Test')
            deletePost(id)
        }
    }
)