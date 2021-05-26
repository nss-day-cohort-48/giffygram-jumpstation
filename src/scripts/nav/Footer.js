import { getUsers } from "../data/provider.js";


export const searchByUser = () => {
  let allUsers = getUsers();
  //creates a html render of a drop down menu
  let html = `<div><select id="selectName">
<option value=0>Filter By User</option>`;
//iterates through each user of allUsers and returns the user id and user name
//into drop down menu
  for (const user of allUsers) {
    html += `<option value="${user.id}">${user.name}</option>
`;
  }
  html += `</select></div>`;
  return html;
};
