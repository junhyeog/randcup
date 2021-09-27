import { defaultColor, defaultText } from "./constants.js";
import { setData } from "./storage.js";

chrome.runtime.onInstalled.addListener(() => {
	// Set default color and text
	setData("color", defaultColor);
	setData("text", defaultText);

	// Set rule
	// Find boj first test case copy button
	// const rule = {
	// 	conditions: [
	// 		new chrome.declarativeContent.PageStateMatcher({
	// 			pageUrl: { hostEquals: "www.codeforces.com" },
	// 		}),
	// 	],
	// 	actions: [new chrome.declarativeContent.ShowPageAction()],
	// };

	// //  conditions에 맞는 페이지일 경우 page_action 활성화
	// chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
	// 	chrome.declarativeContent.onPageChanged.addRules([rule]);
	// });

	// Set context menu
	chrome.contextMenus.create(
		{
			id: "test",
			title: "test",
		},
		() => {
			if (chrome.extension.lastError) {
				console.log(`[-] ${chrome.extension.lastError.message}`);
			} else {
				console.log("[+] Created Context Menu");
			}
		}
	);
});

// add onClickHander for contextMenus
async function onClickHandler(info, tab) {
	console.log(`[+] context menu(${info.menuItemId}) was clicked`);
	const command = info.menuItemId;
	console.log(command);
	console.log(info);
	console.log(tab);
	chrome.tabs.sendMessage(tab.id, { command }, function (response) {
		if (chrome.extension.lastError) {
			console.log(`[-] ${chrome.extension.lastError.message}`);
		} else {
			if (response.success) console.log("res:", response.result);
			else console.log("Command " + command + " failed!");
		}
	});
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onCommandHandler(command) {
	console.log(command);
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		console.log(tabs);
		chrome.tabs.sendMessage(
			tabs[0].id,
			{ command, url: tabs[0].url },
			function (response) {
				if (chrome.extension.lastError) {
					console.log(
						"Got error at <Sending Message>: " +
							chrome.extension.lastError.message
					);
				} else {
					if (response.success) console.log("[+] Res:", response.result);
					else console.log("[-] Command " + command + " failed!");
				}
			}
		);
	});
}

chrome.commands.onCommand.addListener(onCommandHandler);
