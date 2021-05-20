import { GiffyGram } from "./GiffyGram.js"
import {LoginForm} from "./auth/Login.js"
import { CreatePost } from "./feed/CreatePost.js"

const applicationElement = document.querySelector(".giffygram")


export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))
    
    if (user) {
        applicationElement.innerHTML = GiffyGram()
    } else {
        applicationElement.innerHTML = LoginForm()
    }
}

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