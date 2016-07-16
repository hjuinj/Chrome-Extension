var memMon = false;
var mem;
chrome.browserAction.setBadgeBackgroundColor({color : [0,0,255,255]});
function checkMem(){
    chrome.system.memory.getInfo(function(info){
        mem = Math.ceil((info.capacity-info.availableCapacity)*100/info.capacity);
        chrome.browserAction.setBadgeText({ text: mem + "%"});
    });
}
chrome.browserAction.onClicked.addListener(function(tab) {
    memMon = !memMon;
    if(memMon)
        checkMem();
    else
        chrome.browserAction.setBadgeText({ text:  ""});

});


setInterval(function(){ if(memMon ===true) checkMem();}, 5000); //check every 5s
