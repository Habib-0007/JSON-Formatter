let inputBox = document.querySelector(".input");
let outputBox = document.querySelector(".output");
let fornatBtn = document.querySelector(".buttons .format-btn");
let minifyBtn = document.querySelector(".buttons .minify-btn");

fornatBtn.addEventListener("click", () => {
	try {
		var formattedData = JSON.stringify(JSON.parse(inputBox.value), null, 2);

		outputBox.value = formattedData;
	} catch (err) {
		outputBox.value = err.message;
	}
});

minifyBtn.addEventListener("click", () => {
	try {
		var minifiedData = JSON.stringify(JSON.parse(inputBox.value));

		outputBox.value = minifiedData;
	} catch (err) {
		outputBox.value = err.message;
	}
});
