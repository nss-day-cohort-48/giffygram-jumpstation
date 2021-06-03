import { getFiltered } from "./data/provider.js"
import { newPostButton, CreatePost } from "./feed/CreatePost.js"
import { FilteredPosts } from "./feed/FilteredPost.js"
import { giffyFeed } from "./feed/PostList.js"
import { searchByUser } from "./nav/Footer.js"
import { navbar } from "./nav/NavBar.js"
import { renderMessageForm } from "./message/MessageForm.js"
import { checkMessageId } from "./friends/DirectMessage.js"

export const GiffyGram = () => {
    let filter = getFiltered()
//invokes navbar function to render navbar, message form, and new post button html
    let html = `
        ${navbar()}

        <div class="messageForm">
        ${renderMessageForm()}
        ${checkMessageId()}
        </div>
        
        ${newPostButton()}
        ` 
    
//if users post count is less than 1 giffy feed will continue to show
//else the DOM will render to show only the filteredPosts of user selected
    if(filter.length < 1) {
        html += `${giffyFeed()}`
    } else {
        html += `${FilteredPosts()}`
    }
    
    html +=  ` </div>

    <div class="giffygram__footer">
    ${searchByUser()}
    </div>
    `
    return html;
}
//renders and returns html for footer