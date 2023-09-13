document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#new-task-description");
  const tasks = document.querySelector("#tasks");
  const form = document.querySelector("#create-task-form");
  form.onsubmit = function(event) {
    event.preventDefault();
    if (input.value === "") return;
    const toAdd = input.value;
    const item = document.createElement("li");
    item.textContent = toAdd;
    tasks.append(item);
    input.value = "";
    input.focus();
    item.onclick = function() {
      item.remove();
    }
  }
});
