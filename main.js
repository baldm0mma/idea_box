// 	Query Selectors
var form1Button = document.querySelector(".sidebar__form1--button");
var form2Input = document.querySelector(".sidebar__form2--input");
var form2Button = document.querySelector(".sidebar__form2--button");
var creatorTitleInput = document.querySelector(".creator__form--title-input");
var creatorBodyInput = document.querySelector(".creator__form--body-input");
var creatorSaveButton = document.querySelector(".creator__form--button");
var searchBox = document.querySelector(".creator__search");

// Event Listeners
// form1Button.addEventListener("click", functionName);
// form2Input.addEventListener("keyup", functionName);
// form2Button.addEventListener("click", functionName);
// creatorTitleInput.addEventListener("keyup", functionName);
// creatorBodyInput.addEventListener("keyup", functionName);
creatorTitleInput.addEventListener("keyup", saveButtonEnable);
window.addEventListener("load", onLoad);
// searchBox.addEventListener("keyup", functionName);
console.log('test');
function onLoad() {
	console.log('test2');
	creatorSaveButton.disabled = true;
}

function saveButtonEnable() {
	console.log("test3");
	if (creatorTitleInput.value != "") {
		creatorSaveButton.disabled = false;
	} else {
		creatorSaveButton.disabled = true;
	}
}