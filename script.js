//initialization process
window.onload = function () {
	initColorPicker();
};
//references to inputs and color box.
function initColorPicker() {
	let colorBox = document.getElementById("color-box");
	let rgb = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	setColorPickerEventListeners(colorBox, rgb);
}
//setting events on each input
function setColorPickerEventListeners (colorBox, rgb) {
	rgb.red.addEventListener('change', () => {
		console.log("Red value: ", rgb.red.value);
	})
	rgb.green.addEventListener('change', () => {
		console.log("Green value: ", rgb.green.value);
	})
	rgb.blue.addEventListener('change', () => {
		console.log("Blue value: ", rgb.blue.value);
	})
}