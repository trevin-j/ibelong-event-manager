let changeColor = document.getElementById("changeColor");

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
saveBtn.addEventListener('click', () => { // on clicking the save button
    // all the input info from user
    const titleInfo = document.getElementById('ttl').value;
    const descInfo = document.getElementById('description').value;
    const locaInfo = document.getElementById('location').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const allDay = document.getElementById('allDay').checked;

    // save the info to storage
    saveActivity(titleInfo, descInfo, allDay, startDate, locaInfo, endDate);
})