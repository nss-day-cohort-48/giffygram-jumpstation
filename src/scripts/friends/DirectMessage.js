import { getMessages } from "../data/provider.js";

const mainContainer = document.querySelector(".giffygram");


document.addEventListener("click", (evt) => {
  if (evt.target.id === "open-messages") {
  }
});

export const renderMessages = () => {
  return  /*html*/ `
    <nav class="navigation">
    <div class="navigation__item navigation__icon">
        <img src="../src/images/pb.png" alt="Giffygram icon" id="logo">
    </div>
    <div class="navigation__item navigation__name">
        Giffygram
    </div>
    <div class="navigation__item navigation__search">

    </div>
    <div class="navigation__item navigation__message">
        <img id="directMessageIcon" src="../src/images/fountain-pen.svg" alt="Direct message">
        <div class="notification__count">
            ${numberOfMessages()}
        </div>
    </div>
    <div class="navigation__item navigation__logout">
        <button id="logOut" class="fakeLink">Logout</button>
    </div>
</nav>

<section name="post" class="post">
    ${messageList()}
</section>`;
};

let userMessages = [];

const checkMessageId = () => {
  const messages = getMessages();

  for (const message of messages) {
    if (
      message.recipientId === parseInt(localStorage.getItem("gg_user")) &&
      message.read === false &&
      userMessages.length === 0
    ) {
        userMessages.push(message) }
        else {
      for (const pushedMessage of userMessages) {
        if (message.id !== pushedMessage.id || userMessages.length === 0) {
          userMessages.push(message)
          return;
        }
      }
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
        return `<div name="message>${message.text}</div>`;
      })
      .join(``)}`;

  userMessages = [];

  mainContainer.dispatchEvent(new CustomEvent("messageRead"));

  return html;
};
