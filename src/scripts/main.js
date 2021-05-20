
import { GiffyGram } from "./GiffyGram.js"
import {LoginForm} from "./auth/Login.js"
import { CreatePost } from "./feed/CreatePost.js"
import { fetchUsers } from "./data/provider.js";


const mainContainer = document.querySelector(".giffygram");


export const renderApp = () => {

    const user = parseInt(localStorage.getItem("gg_user"))
    
=======
  const user = parseInt(localStorage.getItem("gg_user"));
  fetchUsers().then(() => {

    if (user) {
      console.log("user exist");
      mainContainer.innerHTML = GiffyGram();
    } else {
      console.log("user doesnt exist");
      mainContainer.innerHTML = LoginForm();
    }
  });
};

renderApp();


applicationElement.addEventListener(
    "stateChanged",
    CustomEvent => {
        renderApp()
    }
)

renderApp()

applicationElement.addEventListener(
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
