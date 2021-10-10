let addTask = document.getElementById("to__do");

let container = document.getElementById("todo__container");

let inputField = document.getElementById("input__field");

addTask.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.innerText = inputField.value;
  paragraph.classList.add("paragraph-styling");
  container.appendChild(paragraph);

  inputField.value = "";
  paragraph.addEventListener("click", () => {
    paragraph.style.color = "gray";
  });
  paragraph.addEventListener("dblclick", () => {
    container.removeChild(paragraph);
  });
});
