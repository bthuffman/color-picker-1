//initialization process
window.onload = function () {
	initColorPicker();
};
//references to inputs and color box.
function initColorPicker() {
	let colorBox = document.getElementById("color-box");
	let colors = {
		red: document.getElementById("red"),
		green: document.getElementById("green"),
		blue: document.getElementById("blue")
	};
	//solution 1: since prob 1 would require we change that line of code for each colors even listener if there was a change in the function setBoxBGColor we create the below array followed by a for loop at the begining of the function setColorPickerEventListeners to loop through this array.
	let colorPickers= document.getElementsByClassName("picker");
	setColorPickerEventListeners(colorBox, colors, colorPickers);
}
//setting events on each input
function setColorPickerEventListeners (element, colors, pickerElements) {
	//The next line of code will make it so java only has to calculate the pickerElement length once instead of multiple times if it was put in the i < pickerElements.length
	let pickerLen = pickerElements.length;
	for (let i = 0; i < pickerLen; i++) {
		pickerElements[i].addEventListener('change', () => {
			let red = colors.red.value;
			let green = colors.green.value;
			let blue = colors.blue.value;
			setElementBGColor(element, red, green, blue);
			setDisplayValues(red, green, blue);
		});
	}
	}
	/*Due to the solution 1 we were able to comment out all of this and make changes to everything in one place instead having to change multiple things. Also can easily add more picker elements.
	rgb.red.addEventListener('change', () => {
		console.log("Red value: ", rgb.red.value);
		//Prob 1: Instead of using this commented out code below under every colors event listener, we're refactoring it (make it more readable, better or functional). See commented solution 1.
//		setBoxBGColor(element, rgb.red.value, rgb.green.value, rgb.blue.value);
	});
	rgb.green.addEventListener('change', () => {
		console.log("Green value: ", rgb.green.value);
	});
	rgb.blue.addEventListener('change', () => {
		console.log("Blue value: ", rgb.blue.value);
	})
}
*/
function setElementBGColor(bgElement, red, green, blue) {
	let rgbVal = [red, green, blue].join(',');
	bgElement.style.backgroundColor = "rgb(" + rgbVal + ")";
}

function setDisplayValues(red, green, blue) {
	let redVal = document.getElementById("redVal");
	let greenVal = document.getElementById("greenVal");
	let blueVal = document.getElementById("blueVal");

	redVal.innerText = red;
	greenVal.innerText = green;
	blueVal.innerText = blue;
}