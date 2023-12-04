const parent = document.querySelector(".parent");
// console.log(parent);
console.log(parent.children); // HTML COLLECTION
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }

// parent.children[1].style.color = "orange";
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// querySelector first target hi krta ha..

const dayOne = document.querySelector(".day");
console.log(dayOne); // Monday

// child se parent-->
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling); // Tuesday

console.log("NODES: ", parent.childNodes);

// create element

const div = document.createElement("div");
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "generated title");
div.style.backgroundColor = "green";
div.style.padding = "12px";
// div.innerText = "Hello World"

// Add the text content "Chai aur Code"
const addText = document.createTextNode("Chai aur Code");
div.appendChild(addText);

// Attach the div element to the body
document.body.appendChild(div);

// Log the text content using innerText
console.log(div);
