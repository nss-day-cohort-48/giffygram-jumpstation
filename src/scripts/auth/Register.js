import { sendUsers, getUsers } from "../data/provider.js";
const mainContainer = document.querySelector(".container");

export const Register = () => {
  let html = `
    <div class="field">
    <label class="label" for="name">Name</label>
    <input type="text" name="name" class="input" />
    </div>
    <div class="field">
    <label class="label" for="email">Email</label>
    <input type="text" name="email" class="input" />
    </div>
    <div class="field">
    <label class="label" for="password">Password</label>
    <input type="text" name="password" class="input" />
    </div>
    <button class="button" id="submitRequest">Submit Request</button>
    `;

  return html;
};

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitRequest") {
    // Get what the user typed into the form fields
    const userName = document.querySelector("input[name='name']").value;
    const userEmail = document.querySelector("input[name='email']").value;
    const userPassword = document.querySelector("input[name='password']").value;
    const userState = getUsers();

    const dataToSendToAPI = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    let matchedUser = userState.find((user) => user.email === userEmail);
    if (matchedUser) {
      window.alert("This email is already taken");
    } else {
      sendUsers(dataToSendToAPI);
    }

    // for (const user of userState) {
    //     if (user.email === userEmail) {
    //         window.alert ("This email already exist")
    //         document.innerHtml = LoginForm()
    //     }
    // }

    // Make an object out of the user input

    // Send the data to the API for permanent storage
  }
});
