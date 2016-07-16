setInterval(function(){
    chrome.runtime.sendMessage("tick");
    },
    1000); 

