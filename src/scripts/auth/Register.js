import { sendUsers } from "../data/provider.js";



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
              <input type="number" name="password" class="input" />
          </div>
            <button class="button" id="submitRequest">Submit Request</button>
      `;
  
    return html;
  };

  const mainContainer = document.querySelector(".container");

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitRequest") {
    // Get what the user typed into the form fields
    const userName = document.querySelector(
      "input[name='name']"
    ).value;
    const userEmail = document.querySelector(
      "input[name='email']"
    ).value;
    const userPassword = document.querySelector(
      "input[name='password']"
    ).value;

    // Make an object out of the user input
    const dataToSendToAPI = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    // Send the data to the API for permanent storage
    sendUsers(dataToSendToAPI);
  }
});