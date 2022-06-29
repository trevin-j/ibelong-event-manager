async function saveActivity(title, description, isAllDay, start, location, end="") {
    // If isAllDay, set end to be the same day as start but at 23:59:59
    if (isAllDay) {
        console.log("Is all day");
        end = new Date(start);
        start = new Date(start);
        start.setHours(0, 0);
        end.setHours(23, 59);
        end = end.toISOString();
        start = start.toISOString();
        console.log("Start: " + start);
        console.log("End: " + end);
    }

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
                activities = result["activities"];
                for (let i = 0; i < activities.length; i++) {
                    activities[i].start = new Date(activities[i].start);
                    activities[i].end = new Date(activities[i].end);
                    activities[i].start = activities[i].start.toString();
                    activities[i].end = activities[i].end.toString();
                }
                resolve(activities);
            }
        })
    })
}