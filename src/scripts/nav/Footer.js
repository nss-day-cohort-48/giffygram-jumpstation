import { filterByUser, getUsers } from "../data/provider.js";

export const searchByUser = () => {
const mainContainer = document.querySelector(".giffygram")

let allUsers = getUsers()

let html = `<div><select id="selectName">` 
for (const user of allUsers) {
html+= `<option value="${user.id}">${user.name}</option>
`

}
html += `</select></div>`
return html;
}

document.addEventListener(
    "change",
(event) => {
    if (event.target.id === "selectName") {
        filterByUser(event.target.value)
        console.log("user Id = " + event.target.value)

    }
}

)
