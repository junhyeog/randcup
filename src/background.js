const activeIcon = {
	32: "icons/active_32.png",
	64: "icons/active_64.png",
	128: "icons/active_128.png",
};

const inactiveIcon = {
	32: "icons/inactive_32.png",
	64: "icons/inactive_64.png",
	128: "icons/inactive_128.png",
};

chrome.tabs.onActivated.addListener(function (activeInfo) {
	chrome.tabs.get(activeInfo.tabId, (tab) => {
		if (tab.url.startsWith("https://www.piku.co.kr/")) {
			console.log(`[+] Active`);
			chrome.pageAction.setIcon({ path: activeIcon, tabId: tab.id });
		} else {
			console.log(`[-] Inactive`);
			chrome.pageAction.setIcon({ path: inactiveIcon, tabId: tab.id });
		}
	});
});
