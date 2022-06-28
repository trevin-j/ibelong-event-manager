async function saveActivity(title, description, start, end, location) {
    let activity = {
        title: title,
        description: description,
        start: start,
        end: end,
        location: location,
        isPosted: false
    };
    let activities = await getActivities();
    activities.push(activity);

    await chrome.storage.sync.set({"activities": activities}, function() {
        console.log("Saved activity");
    });
}

async function getActivities() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get({"activities": []}, function(result) {
            if (result["activities"] === undefined) {
                reject();
            } else {
                resolve(result["activities"]);
            }
        })
    })
}

// let title = document.getElementById("title");
// let description = document.getElementById("description");
// let date = document.getElementById("date");
// let postdate = document.getElementById("postdate");
// let saveBtn = document.getElementById("saveBtn");
// let loadBtn = document.getElementById("loadBtn");

// saveBtn.onclick = function() {
//     saveActivity(title.value, description.value, date.value, postdate.value);
// }

// getActivities().then(function(activities) {
//     console.log(activities);
// });