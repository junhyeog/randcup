/**
 * @param {number} p portion of left
 * @returns {void}
 */
function randomSelector(p) {
	const leftContent = document.getElementById("wleft");
	const rightContent = document.getElementById("wright");
	const rand = Math.random();
	if (rand < p) leftContent.click();
	else rightContent.click();
}

function getRandomButton(text, color) {
	let randomButton = document.createElement("button");
	randomButton.className = "randomButton";
	randomButton.innerText = text;
	// randomButton.style.background = color;
	randomButton.draggable = true;
	randomButton.percentage = 0.5;
	randomButton.onclick = () => {
		randomSelector(randomButton.percentage);
	};
	return randomButton;
}

export default getRandomButton;
