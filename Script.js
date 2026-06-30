
function addTask() {
let input = document.getElementById("taskInput");
let taskText = input.value;

if (taskText === "") {
    alert("Please enter a task!");
    return;
}

let li = document.createElement("li");
li.innerHTML = taskText;

// Mark complete on click
li.onclick = function () {
    li.classList.toggle("completed");
};

// Delete button
let deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "X";
deleteBtn.onclick = function () {
    li.remove();
};

li.appendChild(deleteBtn);

document.getElementById("taskList").appendChild(li);
input.value = "";

}
