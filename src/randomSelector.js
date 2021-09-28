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

export default randomSelector;
