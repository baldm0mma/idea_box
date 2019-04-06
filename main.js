// 	Query Selectors
var form1Button = document.querySelector(".sidebar__form1--button");
var form2Input = document.querySelector(".sidebar__form2--input");
var form2Button = document.querySelector(".sidebar__form2--button");
var creatorTitleInput = document.querySelector(".creator__form--title--input");
var creatorBodyInput = document.querySelector(".creator__form--body--input");
var creatorSaveButton = document.querySelector(".creator__form--button");
var searchBox = document.querySelector(".creator__search");
var ideasArea = document.querySelector(".ideas");
var userIdeaPrompt = document.querySelector(".card__ideaprompt");
// var visibleIdeaCards = 0;
var cell = document.querySelector('.ideas');
// var ideaCard = document.querySelector(".card");
var deleteButton = document.querySelector(".cards__top--right");

// var ideaArray = [];
var ideaArray = JSON.parse(localStorage.getItem("ideas")) || [];

// var methodPlaceholder;


// console.log(ideaArray);


// Event Listeners
window.addEventListener("load", onLoad);

// form1Button.addEventListener("click", functionName);
// form2Input.addEventListener("keyup", functionName);
// form2Button.addEventListener("click", functionName);

creatorSaveButton.addEventListener('click', createIdea);
creatorTitleInput.addEventListener('keyup', saveButtonEnable);
creatorBodyInput.addEventListener('keyup', saveButtonEnable);

// searchBox.addEventListener("keyup", functionName);

cell.addEventListener('click', deleteCard);

// Functions

function onLoad() {
  creatorSaveButton.disabled = true;
  // var y = (localStorage.getItem("ideas"));
  // console.log(y);
  remakeArrayWithMethods();
  // createIdeaPrompt();
}

function remakeArrayWithMethods() {
  var array = ideaArray;
  // console.log("array");
  // console.log(array);
  var newArray = array.map(function(item) {
      item = new Idea(item.title, item.body, item.id, item.quality, item.star);
      // console.log("item");
      // console.log(item);
      return item;
  })
  ideaArray = newArray;
  // console.log("ideaArray");
  // console.log(ideaArray);
  addCardsBackAfterReload(ideaArray);
}


function addCardsBackAfterReload(ideaArray) {
  // console.log("ideaArray");
  // console.log(ideaArray);
  ideaArray.forEach(function(item) {
    insertIdea(item);
  });
}

// function userIdeaPrompt() {
//   if (visibleIdeaCards >= 1) {
//   	userIdeaPrompt.classList.add("card__ideaprompt--hidden");
//   	}
// };

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
// 	var inputs = document.getitementsByClassName('input');
// 	for (var i = 0; i < inputs.length; i++) {
// 		inputs[i].reset();
// }


function insertIdea(ideaInstance) {
	// visibleIdeaCards++;
  // console.log(ideaInstance);
	// console.log("# of cards:" + visibleIdeaCards);
	var cell = document.querySelector('.ideas');
	var ideaCard = `
		<div class="card" data-id="${ideaInstance.id}">
        <section class="cards__top card--section">
          <a <img class="cards__top--left" src="?">x</a>
          <button class="cards__top--right" src="?" type="button">x</button>
        </section>
        <section class="cards__middle card--section">
          <h3 class="cards__middle--title">${ideaInstance.title}</h3>
          <p class="cards__middle--text">${ideaInstance.body}</p>
        </section>
        <section class="cards__bottom card--section">
          <a <img class="cards__bottom--left" src="?">x</a>
          <p class="cards__bottom--text">Quality: ${ideaInstance.quality}</p>
          <a <img class="cards__bottom--right" src="?">x</a>
        </section>
      </div>`;
      // console.log("ideaInstance", ideaInstance.id);
  cell.insertAdjacentHTML('afterbegin', ideaCard);
  valueReset();
}

function deleteCard(e) {
  if (e.target.className === "cards__top--right") {
    var card = e.target.closest('.card');
    card.remove();
    cardId = card.dataset.id;
    console.log('cardID:' + cardId);
    findAndRemoveCardData(cardId);
  }
}

function findAndRemoveCardData(cardId) {
  var indexInArray = ideaArray.findIndex(function(item) {
  console.log(item.id);
  return item.id == cardId;
  });
  // console.log(indexInArray);
  ideaArray.splice(indexInArray, 1);
  // console.log(ideaArray);
  var newString = JSON.stringify(ideaArray);
	localStorage.setItem("ideas", newString);
  // JSON.parse(localStorage.getItem("ideas", ideaArray));
}

function createIdea() {
  var title = creatorTitleInput.value;
  var body = creatorBodyInput.value;
  var id = Date.now();
  var star = false;
  var qualityLevels = ["swill", "plausible", "genius"]; 
  var quality = qualityLevels[0]; 
  var ideaInstance = new Idea(title, body, id, quality, star);
  ideaArray.push(ideaInstance);
  // console.log(ideaInstance);
  ideaInstance.saveToStorage(ideaArray);
  // console.log(ideaArray);
  insertIdea(ideaInstance);
}

// function createIdeaPrompt() {
//   if (ideaArray.length > 0) {
//     return;
//   } else {
//     var title = 'Enter idea name'
//     var body = 'Enter your idea content here'
//     var id = 1;
//     var methodPlaceholder = new Idea(title, body, id);
//     ideaArray.push(methodPlaceholder);
//     // console.log(ideaInstance);
//     methodPlaceholder.saveToStorage(ideaArray);
//     // console.log(ideaArray);
//     insertIdea(methodPlaceholder);
//   }
// }