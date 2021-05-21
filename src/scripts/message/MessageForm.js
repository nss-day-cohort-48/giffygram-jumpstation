import { getUsers } from "./provider.js"

const userList = getUsers()

let displayMessageForm = false

const renderBlankMessageForm = () => {
    return ""
}

const renderFullMessageForm =  () => {
    return /*html*/ `
    <article class="message-form">
    <div><h4>Direct Message</h4>
    <input type="button" id="close" value="x">
    </div>

    <div>Recipient:</div>
    <div>
    <select>
    <option>Choose a recipient...</option>
    ${userList.map(
        (user) => {
            return `<option value="user.id">${user.name}</option>`
        }
    )}
    </select>
    </div>

    <div>Message</div>
    <div>
    <input type="text" placeholder="Message to user">
    </div>
    
    <div>
    <input type="Button" value="Save" name="save"><input type="Button" value="Cancel" name="cancel">
    </div>
    </article>`
}

const renderMessageForm = () => {
    if(displayMessageForm === true) {
        renderBlankMessageForm()
    } else {
        renderFullMessageForm()
    }
}

document.addEventListener("click",
    (evt) => {
        if(evt.target.id === "message-form-button")
        displayMessageForm = true
        renderMessageForm()
    }
)
 
document.addEventListener("click",
    (evt) => {
        if(evt.target.id === "close")
        displayMessageForm = false
        renderMessageForm()
    }
 )