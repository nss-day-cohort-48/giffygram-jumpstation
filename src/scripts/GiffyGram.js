import { getFiltered } from "./data/provider.js"
import { newPostButton, CreatePost } from "./feed/CreatePost.js"
import { FilteredPosts } from "./feed/FilteredPost.js"
import { giffyFeed } from "./feed/PostList.js"
import { footer } from "./nav/Footer.js"
import { navbar } from "./nav/NavBar.js"

export const GiffyGram = () => {
    let filter = getFiltered()
    

    // Show main main UI
    let html = `
        <h1>Giffygram</h1>
        <button id="logOut">Logout</button>
        
        <div giffygram__navbar>
        ${navbar()}
        </div>
        
        <div class ="create__post">
        ${newPostButton()}
        </div>

        <div giffygram__feed>` 
    

    if(filter.length < 1) {
        html += `${giffyFeed()}`
    } else {
        html += `${FilteredPosts()}`
    }
    
    html +=  ` </div>

    <div class="giffygram__footer">
    ${footer()}
    </div>
    `
    return html;
}
