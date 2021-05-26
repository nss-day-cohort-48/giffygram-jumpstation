import { getUsers, postMessage } from "../data/provider.js";
//searches for class of giffygram and saves to variable main container
const mainContainer = document.querySelector(".giffygram");
//this is false until message button is clicked and then message form will render
let toggleMessageForm = false;
//initializing click event
document.addEventListener("click", (evt) => {
  //if object clicked is equal to directMessageIcon,
  //main container will announce a state change and the message form will render
  if (evt.target.id === "directMessageIcon") {
    toggleMessageForm = true;
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  }
});
//initializing click event
document.addEventListener("click", (evt) => {
  //if object clicked is equal to directMessage__cancel,
  //main container will announce a state change and the the giffy feed will render
  if (evt.target.id === "directMessage__cancel") {
    toggleMessageForm = false;
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  }
});
//initializing click event
document.addEventListener("click", (evt) => {
  //object clicked must be equal to save
  if (evt.target.id === "save") {
    //variable stores the value of recipients userId
    const messageRecipient = document.getElementById("recipient").value;
    //variable stores the value of message input
    const messageDescription = document.querySelector(
      "input[name='message']"
    ).value;
    //variable currentUserId stores the current users Id
    const currentUserId = parseInt(localStorage.getItem("gg_user"));
    //variable stores the information being sent to the database
    const messageToSendToAPI = {
      userId: currentUserId,
      recipientId: parseInt(messageRecipient),
      text: messageDescription,
      read: false,
    };
    //postMessage function is invoked with an argument of messageToSendToAPI - data is sent to database
    postMessage(messageToSendToAPI);
    //closes out the message form after message sent
    toggleMessageForm = false;
    //if object clicked is equal to directMessage__close, message form will close and state changed
    //will be announed and the giffy feed is rendered
  } else if (evt.target.id === "directMessage__close") {
    toggleMessageForm = false;
    document.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

export const renderMessageForm = () => {
  const users = getUsers();
  if (toggleMessageForm === true) {
    return /*html*/ `
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
  };
  //variable users stores getUsers function  
  // if toggleMessageForm is true it returns a render of the html private messaging form
  //map method iterates through each user and returns a drop down menu of users to message
  //join method adds all elements of array into string 