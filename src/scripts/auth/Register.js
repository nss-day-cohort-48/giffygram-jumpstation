import { sendUsers, getUsers } from "../data/provider.js";



//Register returns html for registration component
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

//initializes a click event listener
document.addEventListener("click", (clickEvent) => {
//checks if object clicked is equal to submitRequest
  if (clickEvent.target.id === "submitRequest") {
//capturing user name and storing in userName
    const userName = document.querySelector("input[name='name']").value;
//capturing user email and storing in userEmail    
    const userEmail = document.querySelector("input[name='email']").value;
//capturing user password and storing in userPassword    
    const userPassword = document.querySelector("input[name='password']").value;
//invoking and storing getUsers function in variable userState
    const userState = getUsers();
//variable dataToSendToAPI is storing users name, email, password, and favorite posts
    const dataToSendToAPI = {
      name: userName,
      email: userEmail,
      password: userPassword,
      favorites: []
    };
//find method is looking for an existing user with same login email. if email exists a window alert appears.
//if user doesnt exist sendUsers function will create a new user and store in the database.
    let matchedUser = userState.find((user) => user.email === userEmail);
    if (matchedUser) {
      window.alert("This email is already taken");
    } else {
      sendUsers(dataToSendToAPI);
    }
  }
});
