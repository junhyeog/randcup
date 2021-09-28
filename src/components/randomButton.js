import randomSelector from "../randomSelector.js";

function getRandomButton(text) {
	let randomButton = document.createElement("button");
	randomButton.className = "randomButton";
	randomButton.innerText = text;
	randomButton.percentage = 0.5;
	randomButton.onclick = () => {
		randomSelector(randomButton.percentage);
	};
	return randomButton;
}

export default getRandomButton;
