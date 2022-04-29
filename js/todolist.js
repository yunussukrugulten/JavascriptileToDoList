let taskDOM = document.querySelector("#task");
let listDOM = document.querySelector("#list");
let buttonDOM = document.querySelector("#liveToastBtn");

buttonDOM.addEventListener("click", add);
listDOM.addEventListener("click", remove);

let myList = document.getElementsByTagName("LI");
for (let i = 0; i < myList.length; i++) {
  let span = document.createElement("SPAN");
  let x = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(x);
  myList[i].appendChild(span);
}

function add() {
  let liDOM = document.createElement("li");
  let input = document.getElementById("task").value;
  let i = document.createTextNode(input);
  liDOM.appendChild(i);
  if (input.trim() == "") {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    listDOM.appendChild(liDOM);
  }
  document.getElementById("task").value = "";

  let span = document.createElement("SPAN");
  let x = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(x);
  liDOM.appendChild(span);
}

function remove(e) {
  if (e.target.className === "close") {
    e.target.parentElement.remove();
  }
}

let done = document.querySelector("ul");
done.addEventListener(
  "click",
  function (d) {
    if (d.target.tagName === "LI") {
      d.target.classList.toggle("checked");
    }
  },
  false
);
