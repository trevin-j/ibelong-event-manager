let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
})


const createBtn = document.getElementById('create-btn');
const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');
const saveBtn = document.getElementById('saveBtn');
const allDayCheckBox = document.getElementById('allDay');
const end = document.getElementById('end');

allDayCheckBox.addEventListener('click', (e) => {
    end.classList.toggle("show")
    console.log(allDayCheckBox.value)
});
createBtn.addEventListener('click', (e) => {
    eventForm.classList.toggle("show")
    eventList.classList.toggle("show")

    createBtn.classList.toggle("btn-outline-danger")
    e.target.textContent = (e.target.textContent === "Create") ? "Close" : "Create"
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
}

