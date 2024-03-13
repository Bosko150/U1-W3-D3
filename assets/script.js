const subButton = document.getElementById("add");
subButton.addEventListener("click", function () {
  const ul = document.getElementById("todolist");
  const myInput = document.getElementById("taskinput").value;
  const li = document.createElement("li");
  li.innerText = myInput;
  let delButton = document.createElement("button");
  delButton.innerText = "x";
  delButton.addEventListener("click", function () {
    ul.removeChild(li);
  });
  li.appendChild(delButton);
  ul.appendChild(li);
  document.getElementById("taskinput").value = "";
});

// let listItem = document.querySelectorAll("li");
// for (let i = 0; listItem.length; i++) {
//   let button = document.createElement("button");
//   button.innerText = "x";
//   button.className = "del";
//   listItem[i].appendChild(button);
// }
// let del = document.getElementsByClassName("del");

// del.addEventListener("click", (e) => {
//   e.target.closest("li").remove();
// });
