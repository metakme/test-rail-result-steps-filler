chrome.tabs.onUpdated.addListener(function(id, info, tab){
    chrome.pageAction.show(tab.id);
    chrome.tabs.executeScript(null, {"file": "popup.js"});
});

//40255163
