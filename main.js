const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

const changeBackGround = () => {
  if (body.classList.contains("dark")) {
    h1.textContent = "Dark Mode Off";
    body.classList.remove("dark");
    button.classList.remove("dark");
  } else {
    h1.textContent = "Dark Mode On";
    body.classList.add("dark");
    button.classList.add("dark");
  }
};

// Event Listner
button.addEventListener("click", changeBackGround);
