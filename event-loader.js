// This script loads the saved events and places them inside the popup.
// It populates the ul element with id "events"

async function loadEvents() {
    let activities = await getActivities();
    console.log(activities);
    let ul = document.getElementById("events");
    ul.innerHTML = "";
    for (let i = 0; i < activities.length; i++) {
        let activity = activities[i];
        let li = document.createElement("li");
        li.innerHTML = `
        <div class="card">
            <p class="card-header">${activity.title}</p>
            <div class="card-body">
                <p class="card-text">${activity.description}</p>
                <p class="card-text"><strong>Starts: </strong>${activity.start}</p>
                <p class="card-text"><strong>Ends: </strong> ${activity.end}</p>
                <p class="card-text"><strong>Location: </strong> ${activity.location}</p>
            </div>
        </div>
        `;
        ul.appendChild(li);
    }
}

loadEvents();