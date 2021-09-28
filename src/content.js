import getRandomButton from "./components/randomButton.js";
import getRandomSlider from "./components/randomSlider.js";
import defaultText from "./constants.js";

//* Add Button on site
function addRandomButton(text) {
	console.log(`[+] add random button(${text})`);
	let randomButton = getRandomButton(text);
	let content = document.getElementsByClassName("ibox-content")[0];
	content.appendChild(randomButton);
}

//* Add Slider on site
function addRandomSlider(text) {
	console.log(`[+] add random slider(${text})`);
	let randomSlider = getRandomSlider(text);
	let content = document.getElementsByClassName("ibox-content")[0];
	content.appendChild(randomSlider);
}

const wleft = document.getElementById("wleft");
const wright = document.getElementById("wright");

if (wleft && wright) {
	console.log(`[+] It's matched content`);
	// addRandomButton(defaultText);
	addRandomSlider("dbclick");
}
