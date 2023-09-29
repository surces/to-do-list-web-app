

const inputBox = document.getElementById("text-box");
const list = document.getElementById("task-list");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        let iconElement = document.createElement('i');
        iconElement.classList.add('fas', 'fa-times');
        span.appendChild(iconElement);
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "I") { // Check if the target is the <i> element
        e.target.parentElement.parentElement.remove(); // Remove the parent <li> element
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}

// Load the tasks when the page is ready
document.addEventListener("DOMContentLoaded", showTask);
