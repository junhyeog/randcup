import { defaultColor, defaultText } from "./variables.js";
import { setData } from "./stroage.js"

chrome.runtime.onInstalled.addListener(() => {
	setData('color', defaultColor);
	setData('text', defaultText);
});
