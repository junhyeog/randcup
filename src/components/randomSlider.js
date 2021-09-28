import randomSelector from "../randomSelector.js";

/*
<div class="sliderContainer">
<div class="indicatorContainer">
<div class="indicator left">
<div class="indicator text" />
</div>
<div class="indicator right">
<div class="indicator text" />
</div>
</div>
<input type="range" min="1" max="100" value="50" class="slider" id="myRange">
<div class="slider text" />
</div>
*/
function getRandomSlider(text) {
	// sliderContainer
	let sliderContainer = document.createElement("div");
	sliderContainer.className = "sliderContainer";

	// slider
	let slider = document.createElement("input");
	slider.type = "range";
	slider.min = "0";
	slider.max = "100";
	slider.value = "50";
	slider.className = "slider";
	slider.id = "myRange";
	slider.oninput = () => {
		rightText.innerText = slider.value;
		leftText.innerText = 100 - slider.value;
		sliderText.style.left = `calc(${slider.value}% - ${
			5.1 * slider.value * 0.01
		} * var(--size))`;
	};
	slider.ondblclick = () => {
		randomSelector((100 - slider.value) / 100);
	};
	sliderContainer.appendChild(slider);

	// slider text
	let sliderText = document.createElement("div");
	sliderText.className = "sliderText";
	sliderText.innerText = text;
	sliderContainer.appendChild(sliderText);

	// indicatorContainer
	let indicatorContainer = document.createElement("div");
	indicatorContainer.className = "indicatorContainer";
	sliderContainer.appendChild(indicatorContainer);

	// left indicator
	let leftIndicator = document.createElement("div");
	leftIndicator.className = "indicator left";
	indicatorContainer.appendChild(leftIndicator);

	// left text
	let leftText = document.createElement("div");
	leftText.className = "indicator text";
	leftText.innerText = "50";
	leftIndicator.appendChild(leftText);

	// right indicator
	let rightIndicator = document.createElement("div");
	rightIndicator.className = "indicator right";
	indicatorContainer.appendChild(rightIndicator);

	// right text
	let rightText = document.createElement("div");
	rightText.className = "indicator text";
	rightText.innerText = "50";
	rightIndicator.appendChild(rightText);

	return sliderContainer;
}

export default getRandomSlider;
