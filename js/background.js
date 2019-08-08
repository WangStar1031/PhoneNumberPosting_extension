chrome.contextMenus.create({
    title: 'Post Phone number "%s"', 
    contexts:["selection"], 
    onclick: function(info, tab) {
        // sendSearch(info.selectionText);
        alert(info.selectionText);
        $.get("http://localhost/getPhoneNumbers/?number=" + info.selectionText);
    }
});