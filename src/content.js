console.log("hello from content");

function messageHandler(mes) {
	return confirm("messageHandeler");
}

function messageListener(message, sender, sendResponse) {
	console.log(sender);
	console.log("[+] Message recieved: ", message);
	if (messageHandler(message)) {
		console.log(`[+] Done ${message.command}`);
		sendResponse({ success: true });
	} else {
		console.log("[-] Failed to handle message");
		sendResponse({ success: false });
	}
}

chrome.runtime.onMessage.addListener(messageListener);
