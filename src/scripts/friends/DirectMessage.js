import { getMessages } from "../data/provider.js";
import { GiffyGram } from "../GiffyGram.js";

const mainContainer = document.querySelector(".giffygram")

const messages = getMessages();

document.addEventListener("click", (evt) => {
  if (evt.target.id === "open-messages") {
  }
});

export const renderMessages = () => {
  document.querySelector(".giffygram").innerHTML = /*html*/ `
    <nav class="navigation">
    <div class="navigation__item navigation__icon">
        <img src="../pb.png" alt="Giffygram icon" id="logo">
    </div>
    <div class="navigation__item navigation__name">
        Giffygram
    </div>
    <div class="navigation__item navigation__search">

    </div>
    <div class="navigation__item navigation__message">
        <img id="directMessageIcon" src="../fountain-pen.svg" alt="Direct message">
        <div class="notification__count">
            0
        </div>
    </div>
    <div class="navigation__item navigation__logout">
        <button id="logOut" class="fakeLink">Logout</button>
    </div>
</nav>

<div>
    ${messageList()}
</div>`;
};

let userMessages = [];

const checkMessageId = () => {
  const messages = getMessages();

  for (const message of messages) {
    if (
      message.recipientId === parseInt(localStorage.getItem("gg_user")) &&
      message.read === false
    ) {
      userMessages.push(message);
    }
  }
};

export const numberOfMessages = () => {
  checkMessageId();
  return userMessages.length;
};

const messageList = () => {
  checkMessageId();

  let html = /*html*/ `
    ${userMessages
      .map((message) => {
        return `<section name="message>${message.text}</section>`;
      })
      .join(``)}`;

  userMessages = [];

  mainContainer.dispatchEvent(new CustomEvent("messageRead"))

  return html;
};
