let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({color}) => {
    changeColor.style.backgroundColor = color;
})

const createBtn = document.getElementById('create-btn');
const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

createBtn.addEventListener('click', (e) => {
    eventForm.classList.toggle("show")
    eventList.classList.toggle("show")

    createBtn.classList.toggle("btn-outline-danger")
    // if (e.target.textContent === "Create") {
    //     e.target.textContent = "Close"
    // } else {
    //     e.target.textContent = "Create"
    // }
    e.target.textContent = (e.target.textContent === "Create") ? "Close" : "Create"
});