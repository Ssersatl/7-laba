function MyMagicBall() {
	let wrapperBlock = document.createElement("div");
	wrapperBlock.id = "wrapper__ball";
  
	let imgBall = document.createElement("img");
	imgBall.src = "https://a.allegroimg.com/original/11213f/25ef525c419eae4c47fb71dbf06a/Krysztalowa-Kula-Wrozenia-8-cm";
	imgBall.alt = "Магічна Куля";
	imgBall.id = "ball-img";
	let inputQuestion = document.createElement("input");
	inputQuestion.type = "text";
	inputQuestion.id = "input-question";
	inputQuestion.placeholder = "Задайте ваше питання...";
	let buttonAsk = document.createElement("button");
	buttonAsk.innerText = "Задати питання";
	buttonAsk.id = "ask-button";
	buttonAsk.onclick = askMagicBall;
	wrapperBlock.appendChild(imgBall);
	wrapperBlock.appendChild(inputQuestion);
	wrapperBlock.appendChild(buttonAsk);
	document.body.innerHTML = '';
	document.body.appendChild(wrapperBlock);
}
function askMagicBall() {
	let prevAnswer = document.getElementById("answer");
	let inputQuestion = document.getElementById("input-question");
	let validQuestion = inputQuestion.value.trim();
	if (!validQuestion) {
		 alert("Будь ласка, введіть питання.");
		 return;
	}
	if (prevAnswer) {
		 prevAnswer.remove();
	}
	let random = Math.random() < 0.5 ? "Так" : "Ні";
	let textAnswer = document.createElement("p");
	textAnswer.id = "answer";
	textAnswer.innerText = "Відповідь: " + random;
	let wrapperBlock = document.getElementById("wrapper__ball");
	wrapperBlock.appendChild(textAnswer);
}
MyMagicBall();
