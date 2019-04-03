// 	Query Selectors
var form1Button = document.querySelector(".sidebar__form1--button");
var form2Input = document.querySelector(".sidebar__form2--input");
var form2Button = document.querySelector(".sidebar__form2--button");
var creatorTitleInput = document.querySelector(".creator__form--title-input");
var creatorBodyInput = document.querySelector(".creator__form--body-input");
var creatorSaveButton = document.querySelector(".creator__form--button");
var searchBox = document.querySelector(".creator__search");

// Event Listeners
window.addEventListener("load", onLoad);
// form1Button.addEventListener("click", functionName);
// form2Input.addEventListener("keyup", functionName);
// form2Button.addEventListener("click", functionName);
// creatorTitleInput.addEventListener("keyup", functionName);
// creatorBodyInput.addEventListener("keyup", functionName);

creatorTitleInput.addEventListener("keyup", saveButtonEnable);
creatorBodyInput.addEventListener("keyup", saveButtonEnable);

// searchBox.addEventListener("keyup", functionName);

function onLoad() {
creatorSaveButton.disabled = true;
}

function saveButtonEnable() {
	if (creatorTitleInput.value === "" || creatorBodyInput.value === "") {
		creatorSaveButton.disabled = true;
	} else {
		creatorSaveButton.disabled = false;
	}
}