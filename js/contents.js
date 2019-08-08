console.log("contents");
// web page script for sending user id to extension.

// var data = { type: "USER_LOGIN", text: user_id };
// window.postMessage(data, "*");

window.addEventListener("message", function(event) {
    // We only accept messages from ourselves
    if (event.source != window)
        return;
    
    if (event.data.type && (event.data.type == "USER_LOGIN")) {
        // console.log("Content script received message: " + event.data.text);
        var userId = event.data.text;
        chrome.storage.sync.set({ USER_ID_dataway: userId });
        console.log("user id is", userId);
    }
});