import {
    fetchUsers,
    getUsers,
    postMessage,
} from "../data/provider.js";

const mainContainer = document.querySelector(".giffygram");

let toggleMessageForm = false;

    document.addEventListener("click",
    (evt) => {
        if(evt.target.id === "directMessageIcon") {
            toggleMessageForm = true
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
      })

      document.addEventListener("click",
      (evt) => {
        if(evt.target.id === "directMessage__cancel") {
          toggleMessageForm = false
          mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
      })
  
    document.addEventListener("click",
    (evt) => {
    if (evt.target.id === "save") {
      const messageRecipient = document.getElementById("recipient").value;
      const messageDescription = document.querySelector("input[name='message']")
        .value;
  
      const currentUserId = parseInt(localStorage.getItem("gg_user"));
  
      const messageToSendToAPI = {
        userId: currentUserId,
        recipientId: parseInt(messageRecipient),
        text: messageDescription,
        read: false,
      };
  
      postMessage(messageToSendToAPI);
      toggleMessageForm = false
    } else if (evt.target.id === "directMessage__close") {
      toggleMessageForm = false
      document.dispatchEvent(new CustomEvent("stateChanged"));
    } 
  });
  
    export const renderMessageForm = () => {

    const users = getUsers()

    if (toggleMessageForm === true) {
      return /*html*/`
      <div class="messageForm">
      <h3>Direct Message</h3>
      <div class="messageForm__recipients">
          <label>Recipient:</label>
          <select name="messageForm__recipient" class="messageForm__input" id="recipient">
          <option value="">Choose a recipient...</option>
          ${users
            .map((user) => {
              return `
              <option class="user" value="${user.id}">${user.name}</option>
              `;
            })
            .join("")}
          </select>
          </div>
          <div class="messageForm_text">
          <label for="message">Message:</label>
          <input type="text" name="message" class="message__input" placeholder="Message to user"/>
          </div>
          <button id="save">Save</button>
          <button id="directMessage__cancel">Cancel</button>
          </div>
      `;
    } else {
      return "";
    }
  }
