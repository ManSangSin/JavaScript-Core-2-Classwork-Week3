/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/
// console.log("Hello World");

// /*
// Task 1
// =======

// Write JavaScript below that console.logs:
//     1. all the "p" element nodes of the document,
//     --> should log a list of nodes with a length of 6

//     2. the first div element node
//     --> should log the ".site-header" node

//     3. the element with id "jumbotronText"
//     --> should log the "#jumbotronText" node

//     4. all the "p" elements of contained inside the .primary-content element node
//     --> should log a list of nodes with a length of 3

// */
console.log(document.querySelectorAll("p"));
let pElements = document.querySelectorAll("p");
for (pElement of pElements) {
  console.log(pElement.innerText);
}
console.log(document.querySelector("div"));
console.log(document.querySelector("#JumbotronText"));
console.log(document.querySelectorAll(".primary-content p"));

// /*
// Task 2
// ======

// When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

function doAlert(event) {
  alert("Thanks for visiting Bikes for Refugees!");
  event.preventDefault();
}

let alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", doAlert);

/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
function changeColor(event) {
  let myElement = document.querySelector("body");
  // myElement.style.backgroundColor = "red";
  myElement.classList.add("background--red");
}

let BGChangeBtn = document.querySelector("#bgrChangeBtn");
BGChangeBtn.addEventListener("click", changeColor);
// /*
// Task 4
// ======

// When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
// */
let allLinks = document.querySelectorAll("a");
for (const link of allLinks) {
  link.classList.add("larger");
}
/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

function addTextFromInput(event) {
  let pElement = document.createElement("p");
  pElement.innerText = document.querySelector("#addArticleInput").value;
  document.querySelector("#addArticle").appendChild(pElement).value;
  event.preventDefault();
}

let addTextBtn = document.querySelector("#addArticleBtn");
addTextBtn.addEventListener("click", addTextFromInput);
