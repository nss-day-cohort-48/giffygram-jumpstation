import { filterByUser, getUsers } from "../data/provider.js";

export const footer = () => {
const mainContainer = document.querySelector(".giffygram")

let allUsers = getUsers()

let html = `<div><select id="selectName">
<option value=0>Filter By User</option>` 
for (const user of allUsers) {
html+= `<option value="${user.id}">${user.name}</option>
`

}
html += `</select></div>`
return html;
}


