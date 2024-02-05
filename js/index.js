let inputBox = document.querySelector(".input");
let outputBox = document.querySelector(".output");
let fornatBtn = document.querySelector(".buttons .format-btn");
let minifyBtn = document.querySelector(".buttons .minify-btn");
let clearBtn = document.querySelector(".wrapper i.fa-trash");
let clipboardBtn = document.querySelector(".wrapper i.fa-clipboard");

document.getElementById("main").style.height = `${window.innerHeight}px`;

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

clearBtn.addEventListener("click", () => {
	inputBox.value = "";
});

clipboardBtn.addEventListener("click", () => {
	navigator.clipboard
		.writeText(outputBox.value)
		.then(() => {
			alert("Text successfully copied to clipboard");
		})
		.catch(err => {
			alert("Unable to copy text to clipboard", err);
		});
});
