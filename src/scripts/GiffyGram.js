import { newPostButton, CreatePost } from "./feed/CreatePost.js"
import { giffyFeed } from "./feed/PostList.js"
import { footer } from "./nav/Footer.js"
import { navbar } from "./nav/NavBar.js"

export const GiffyGram = () => {


    // Show main main UI
    return `
    <h1>Giffygram</h1>
    <button id="logOut">Logout</button>
    
    <div giffygram__navbar>
    ${navbar()}
    </div>
    
    <div class ="create__post">
    ${newPostButton()}
    </div>

    <div giffygram__feed>
    ${giffyFeed()}
    </div>

    <div giffygram__footer>
    ${footer()}
    </div>
    `
}
