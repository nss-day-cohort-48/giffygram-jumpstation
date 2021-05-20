import { getUsers } from "../data/provider.js";
import { Register } from "./Register.js";

const mainContainer = document.querySelector(".giffygram");
document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "loginButton") {
    let foundUser = null;
    const userState = getUsers();
    // console.log(userState)
    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;
    // console.log(email + password)
    for (const user of userState) {
      if (user.email === email && user.password === password) {
        foundUser = user;
        // console.log(foundUser)
      }
    }

    if (foundUser !== null) {
      localStorage.setItem("gg_user", foundUser.id);
      document
        .querySelector(".giffygram")
        .dispatchEvent(new CustomEvent("stateChanged"));
    } else {
      window.alert("This user does not exist");
    }
  } else if (clickEvent.target.id === "createAccount") {
    mainContainer.innerHTML = Register();
  } else if (clickEvent.target.id === "logOut") {
    localStorage.clear("gg_user");
    mainContainer.innerHTML = LoginForm();
  }
});

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
