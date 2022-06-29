async function saveActivity(title, description, isAllDay, start, location, end="") {
    // If isAllDay, set end to be the same day as start but at 23:59:59
    if (isAllDay) {
        end = new Date(start.getTime());
        end.setHours(23, 59, 59, 999);
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
                resolve(result["activities"]);
            }
        })
    })
}