function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}


        

function updateWord(word, exchange){
    if(!(word) || word.slice(-1) !== " "){
        exchange([{
            'content': "",
            'description': ""
        }]);
    }
    else{
        httpRequest(url + word, function(html){
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, "text/html");
            syn = doc.getElementsByClassName("relevancy-list")[0].children[0].children[0].children[0].getElementsByTagName("span")[0].innerHTML;
        });
        exchange([{
            'content': syn,
            'description': syn
        }]);
    }
    syn = "";
}

var syn;
var url = 'http://www.thesaurus.com/browse/';

chrome.omnibox.setDefaultSuggestion({'description':'Synonym of inputted word:'});
chrome.omnibox.onInputChanged.addListener(updateWord);

//function gotoYahoo(text, disposition){
 //   window.open('http://finance.yahoo.com/q?s=USDCNY=X');
//}
//chrome.omnibox.onInputEntered.addListener(gotoYahoo);