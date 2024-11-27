console.log("merge");
let div = document.querySelector("div");
div.style.backgroundColor = "red";
let newDiv = document.createElement("p");
newDiv.innerHTML = "Hello world";
newDiv.style.backgorundColor = "red";
div.appendChild(newDiv);