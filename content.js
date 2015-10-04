// seem to run when a page is loaded:  alert("hello");
function VimLikeness(keypressed){
    switch(keypressed.keyCode){
        case 74:
            window.scrollBy(0,50);
            break;
        case 75:
            window.scrollBy(0,-50);
            break;
        case 72:
            document.body.scrollLeft -=10;
            break;
        case 76:
            document.body.scrollLeft +=10;
            break;
        default:
            break;
    }
}


chrome.runtime.sendMessage("", function(response) {
    response.Vim ? document.addEventListener("keydown", VimLikeness) : document.removeEventListener("keydown", VimLikeness);
       
});


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    message.Vim ? document.addEventListener("keydown", VimLikeness) : document.removeEventListener("keydown", VimLikeness);
});
