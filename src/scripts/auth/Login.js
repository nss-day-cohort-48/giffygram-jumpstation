import { getUsers } from "../data/provider.js";
import { Register } from "./Register.js";
//finds component on DOM with class of giffygram
const mainContainer = document.querySelector(".giffygram");
//initializes a click event listener
document.addEventListener("click", (clickEvent) => {
//checks if object clicked is equal to loginButton
  if (clickEvent.target.id === "loginButton") {
//variable is null so that any old data is purged    
    let foundUser = null;
//invokes getUsers and stores all user data in userState    
    const userState = getUsers();
//capturing users email input and storing value in email variable    
    const email = document.querySelector("input[name='email']").value;
//capturing user password input and storing value in password variable
    const password = document.querySelector("input[name='password']").value;
//iterates through each user of userState
    for (const user of userState) {
//checks that user email & password matches a user in the database.
// If found it will store that user in foundUser
      if (user.email === email && user.password === password) {
        foundUser = user;
      }
    }
//if there is a foundUser localStorage is set
//DOM will show giffygram feed, if user is not found
//a window alert is displayed (28-35)
    if (foundUser !== null) {
      localStorage.setItem("gg_user", foundUser.id);
      document
        .querySelector(".giffygram")
        .dispatchEvent(new CustomEvent("stateChanged"));
    } else {
      window.alert("This user does not exist");
    }
//if object clicked equals createAccount DOM will render Register page    
  } else if (clickEvent.target.id === "createAccount") {
    mainContainer.innerHTML = Register();
//if object clicked equals logOut  DOM will render Login page and clear localStorage    
  } else if (clickEvent.target.id === "logOut") {
    localStorage.clear("gg_user");
    mainContainer.innerHTML = LoginForm();
  }
});

//LoginForm returns html of form component
export const LoginForm = () => {
  return `
        <div class="loginForm">
            <form>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="loginButton">Login</button>
            <button id="createAccount">Create Account</button>
        </div>
    `;
};
