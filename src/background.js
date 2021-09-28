chrome.runtime.onInstalled.addListener(() => {
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
});
