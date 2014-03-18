


// Communication from background to content script

function responseCallback(value) { // used below
    console.log(value);
}

chrome.tabs.onSelectionChanged.addListener(
    function handleSelectionChange(tabId, selectInfo) {
        var requestObject = {"backgroundKey": "backgroundValue"};
        chrome.tabs.sendRequest(tabId, requestObject,
            responseCallback);
    }
);


// ---> content script is receiving
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        sendResponse({"contentKey": "contentValue"});
        // NB: always respond, if only with an empty object
        // otherwise request remains open
    }
);







// From popup to content script
chrome.tabs.getSelected(null, function(tab) {
        tabId = tab.id;
        tabUrl = tab.url;
        chrome.tabs.sendRequest(tabId, {"fooKey": "fooValue"},
            initPage);
    }
);


// ---> content script is receiving
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
        sendResponse({"fooKey": "fooValue"});
    }
);