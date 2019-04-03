// 	Query Selectors
var form1Button = document.querySelector(".sidebar__form1--button");
var form2Input = document.querySelector(".sidebar__form2--input");
var form2Button = document.querySelector(".sidebar__form2--button");
var creatorTitleInput = document.querySelector(".creator__form--title.input");
var creatorBodyInput = document.querySelector(".creator__form--body.input");
var creatorSaveButton = document.querySelector(".creator__form--button");
var searchBox = document.querySelector(".creator__search");

// Event Listeners
window.addEventListener("load", onLoad);
// form1Button.addEventListener("click", functionName);
// form2Input.addEventListener("keyup", functionName);
// form2Button.addEventListener("click", functionName);
// creatorTitleInput.addEventListener("keyup", functionName);
// creatorBodyInput.addEventListener("keyup", functionName);

creatorSaveButton.addEventListener('click', insertIdea);
creatorTitleInput.addEventListener('keyup', saveButtonEnable);
creatorBodyInput.addEventListener('keyup', saveButtonEnable);

// searchBox.addEventListener("keyup", functionName);

function onLoad() {
  creatorSaveButton.disabled = true;
}

function saveButtonEnable() {
	if (creatorTitleInput.value === '' || creatorBodyInput.value === '') {
    creatorSaveButton.disabled = true;
	} else {
    creatorSaveButton.disabled = false;
	}
}

function valueReset() {
  creatorTitleInput.value = '';
  creatorBodyInput.value = '';
  saveButtonEnable();
}

// function valueReset() {
// 	var inputs = document.getElementsByClassName('input');
// 	for (var i = 0; i < inputs.length; i++) {
// 		inputs[i].reset();
// }

function insertIdea() {
	var cell = document.querySelector('.ideas');
	var ideaCard = 
		`<div class="card">
        <section class="cards__top card--section">
          <a <img class="cards__top--left" src="?">x</a>
          <a <img class="cards__top--right" src="?">x</a>
        </section>
        <section class="cards__middle card--section">
          <h3 class="cards__middle--title">${creatorTitleInput.value}</h3>
          <p class="cards__middle--text">${creatorBodyInput.value}</p>
        </section>
        <section class="cards__bottom card--section">
          <a <img class="cards__bottom--left" src="?">x</a>
          <p class="cards__bottom--text">Quality: Swill</p>
          <a <img class="cards__bottom--right" src="?">x</a>
        </section>
      </div>`;
  cell.insertAdjacentHTML('afterbegin', ideaCard);
  valueReset();
}