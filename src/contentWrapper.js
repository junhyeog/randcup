"use strict";
// https://stackoverflow.com/questions/48104433/how-to-import-es6-modules-in-content-script-for-chrome-extension
const script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", chrome.extension.getURL("./src/content.js"));
const head =
	document.head ||
	document.getElementsByTagName("head")[0] ||
	document.documentElement;
head.insertBefore(script, head.lastChild);
