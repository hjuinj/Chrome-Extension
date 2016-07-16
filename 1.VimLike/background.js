var Vim = false;
//putting alert out here will make it run automatically once extension is running (before button clicked
    //alert('This button was clicked!');

chrome.browserAction.onClicked.addListener(function(tab) {
    Vim = !Vim;
    chrome.browserAction.setBadgeText({ text: Vim? "Vim":"" });
    //console.log(Vim);
    //chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
    chrome.tabs.query({}, function(tabs) {
        for(var i = 0; i < tabs.length; i++)
            chrome.tabs.sendMessage(tabs[i].id, {Vim:Vim});
    });

});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    sendResponse({Vim : Vim});
});
