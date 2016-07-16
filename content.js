// seem to run when a page is loaded:  alert("hello");
function VimLikeness(keypressed){
    var el = document.activeElement;
    //console.log(el.type == undefined);
    //if (el && !(el.tagName.toLowerCase() != 'input' && el.type != 'text' || el.tagName.toLowerCase() != 'textarea')) {
    //
    //condition to test focus is not in a textfield for entering text
    if(el && el.type == undefined) {
        
        
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
    
}


chrome.runtime.sendMessage("", function(response) {
    response.Vim ? document.addEventListener("keydown", VimLikeness) : document.removeEventListener("keydown", VimLikeness);
       
});


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    message.Vim ? document.addEventListener("keydown", VimLikeness) : document.removeEventListener("keydown", VimLikeness);
});
