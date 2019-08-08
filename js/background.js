chrome.contextMenus.create({
    title: 'Post Phone number "%s"', 
    contexts:["selection"], 
    onclick: function(info, tab) {
        // sendSearch(info.selectionText);
        // alert(info.selectionText);
        // $.get("http://localhost/getPhoneNumbers/?number=" + info.selectionText);
        chrome.storage.sync.get(['USER_ID_dataway'], function(result) {
        	if( !result.USER_ID_dataway){
        		alert("You didn't login yet. Please login.")
        	} else{
		        $.post("http://app.dataway.nl/", {number: info.selectionText, userId: result.USER_ID_dataway});
        	}
        });
    }
});