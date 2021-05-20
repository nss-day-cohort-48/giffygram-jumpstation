const API = "http://localhost:3000"
const mainContainer = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false,
        displayMessages: false
    },
    allUsers: []
}

export const getUsers = () => {
    return [...applicationState.allUsers]
}

export const fetchUsers = () => {
    return fetch(`${API}/users`)
    .then((response) => response.json())
    .then((userData) => {
        applicationState.allUsers = userData
    })
}

