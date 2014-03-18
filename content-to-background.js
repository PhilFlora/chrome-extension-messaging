


// Sending a request from a content script to the background
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	console.log(response.farewell);
});






// receiving message on the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

	// the tab object is this: sender.tab (the tab url is this: sender.tab.url )
	if (request.greeting == "hello") {
		sendResponse({farewell: "goodbye"});
	}

});




