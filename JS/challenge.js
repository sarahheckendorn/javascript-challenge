function highlight(text) {
	let inputText = document.getElementById("p1");
	let innerHTML = inputText.innerHTML;
	let index = innerHTML.indexOf(text);
	if (index >= 0) {
		innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index, index+text.length) + "</span>" + innerHTML.substring(index + text.length);
		inputText.innerHTML = innerHTML;
	}
}

function replaceWords() {
	let oldWords = document.getElementById("p2").textContent;
	let words = {
		"starbase": "Starbucks",
		"Captain": "Yodeling",
		"Kargan": "Donkeys",
		"prisoner": "Rancher",
		"Damage": "Cattle",
		"report": "Alert",
		"Worf": "Bull",
		"sister": "cow",
		"phaser": "pail",
		"pointed": "thrown",
	};
	oldWords = oldWords.replace(/starbase|Captain|Kargan|prisoner|Damage|report|Worf|sister|phaser|pointed/gi, function(matched) {
		return words[matched];
	});
	document.getElementById("cattle tails").innerHTML = oldWords
}