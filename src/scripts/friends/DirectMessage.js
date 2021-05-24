import { getMessages } from "../data/provider.js"
import { GiffyGram } from "../GiffyGram.js"

const messages = getMessages()

document.addEventListener("click",
(evt) => {
    if(evt.target.id === "open-messages") {

    }
}
)

const renderMessages = () => {
    let html = ``

    GiffyGram.innerHTML = ``
}