


// When sending message to the content script, you need to specify the tab



// sending a message to the content script in the selected tab
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

	// sending actual message
	chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
		console.log(response.farewell);
	});
});






// receiving message on the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

	if (request.greeting == "hello") {

		// Note: If multiple pages are listening for onMessage events, only the first to call sendResponse() for a particular event will succeed in sending the response. All other responses to that event will be ignored.
		sendResponse({farewell: "goodbye"});
	}

});


