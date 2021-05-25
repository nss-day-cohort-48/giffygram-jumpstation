import { getMessages } from "../data/provider.js";
import { GiffyGram } from "../GiffyGram.js";

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
    </div>`;
};
