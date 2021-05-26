export const navbar = () => {
    return /*html*/`<nav class="navigation">
    <div class="navigation__item navigation__icon">
        <img src="/images/pb.png" alt="Giffygram icon" id="logo">
    </div>
    <div class="navigation__item navigation__name">
        Giffygram
    </div>
    <div class="navigation__item navigation__search">

    </div>
    <div class="navigation__item navigation__message">
        <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message">
        <div class="notification__count">
            0
        </div>
    </div>
    <div class="navigation__item navigation__logout">
        <button id="logOut" class="fakeLink">Logout</button>
    </div>
</nav>
    </div>`
}

//html render for nav bar
//returns html render of nav bar images, text, logo, and logout option