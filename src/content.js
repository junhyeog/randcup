import getRandomButton from "./components/randomButton.js";
import { defaultText, defaultColor } from "./constants.js";

console.log("[+] Hello I'm matched content");

//* Handle message
/**
 *
 * @param {object} mes
 * @returns {boolean} is handled ? 1 : 0
 */
function messageHandler(mes) {
	return confirm("messageHandeler");
}

function messageListener(message, sender, sendResponse) {
	console.log("[+] Message recieved: ", message);
	if (messageHandler(message)) {
		console.log(`[+] Done: ${message.command}`);
		sendResponse({ success: true });
	} else {
		console.log("[-] Failed to handle message");
		sendResponse({ success: false });
	}
}

// chrome.runtime.onMessage.addListener(messageListener);

//* Add Button on site

function addRandomButton(text, color) {
	console.log(`[+] add random button(${text}, ${color})`);
	let randomButton = getRandomButton(text, color);
	let content = document.getElementsByClassName("ibox-content")[0];
	content.appendChild(randomButton);
}

addRandomButton(defaultText, defaultColor);
