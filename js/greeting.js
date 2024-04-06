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
  document.querySelector("#todo-aside").classList.remove(HIDDEN_CLASSNAME);
  setTimeout(function () {
    document.querySelector("#todo-aside").style.opacity = "1";
  }, 100);
}

const savedUsername = localStorage.getItem(USERNAM_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLinkClick);
} else {
  paintGreetings(savedUsername);
}

const greetingMouseover = () => {
  console.log("a");
  greeting.style.opacity = "0";
  setTimeout(function () {
    greeting.classList.add(HIDDEN_CLASSNAME);
  }, 3000);
  greeting.removeEventListener("mouseover", greetingMouseover);
};

greeting.addEventListener("mouseover", greetingMouseover);
greeting.style.transition = "opacity 3s";
