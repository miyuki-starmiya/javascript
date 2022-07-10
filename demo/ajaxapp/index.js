
const heading = document.querySelector("h2");
const headingText = heading.textContent;

// generate elements
const button = document.createElement("button");
const showArea = document.createElement("p");

button.textContent = "Click me";
document.body.appendChild(button);

const showUserInfo = () => {
  const userId = "KamiHitoe";
  // return Promise
  fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
  .then(response => {
    console.log(response.status);
    return response.json().then(userInfo => {
      console.log(userInfo);
      console.log(userInfo.name);
      showArea.textContent = userInfo.name;
      document.body.appendChild(showArea);
    })
  })
};

// set event listener
button.addEventListener("click", showUserInfo);
