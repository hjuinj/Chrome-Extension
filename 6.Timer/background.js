var timer = false;
var upLimit = 9000;
var time = 0;
chrome.browserAction.setBadgeBackgroundColor({color : [0,0,0,255]});

function tick(){
    if(!timer || time > upLimit  ){
        if(time > upLimit) timer = !timer;
        time = 0;
        chrome.browserAction.setBadgeText({ text:  ""});
    }
    else {
        time += 1;
        chrome.browserAction.setBadgeText({ text: time.toString() });
    }
}

chrome.browserAction.onClicked.addListener(function(tab) {
    timer = !timer;
    tick();

});


setInterval(function(){ if(timer ===true) tick();}, 1000); 
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message == "tick"){
        timer = true;
        tick();
        timer = false;
    }
});