const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const USERNAM_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function handleLinkClick(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAM_KEY, loginInput.value);
  paintGreetings(loginInput.value);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove("hidden");
  document.querySelector("#todo-form").classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("#todo-list").classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAM_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLinkClick);
} else {
  paintGreetings(savedUsername);
}
