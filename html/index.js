let form = document.querySelector("form");
console.log(form);

let nameTag = document.querySelector("#name");
console.log(nameTag);
let passTag = document.querySelector("#password");
console.log(passTag);

let nameInput = document.querySelector("#emailTag");
let passInput = document.querySelector("#passTag");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(e.target);
});

function getData(form) {
  var formData = new FormData(form);

  // iterate through entries...
  for (var pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  let dataObj = Object.fromEntries(formData);
  // ...or output as an object
  console.log(dataObj);

  nameTag.textContent = nameInput.value;
  passTag.textContent = passInput.value;
}
