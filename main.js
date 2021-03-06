var titleInput = document.querySelector(".creator__form--title--input");
var bodyInput = document.querySelector(".creator__form--body--input");
var saveButton = document.querySelector(".creator__form--button");
var cardTable = document.querySelector(".ideas");
var deleteButton = document.querySelector(".cards__top--right");
var prompt = document.querySelector(".card__ideaprompt");
var ideaCollection;

window.addEventListener('load', loadPage);
titleInput.addEventListener('keyup', enableSaveButton);
bodyInput.addEventListener('keyup', enableSaveButton);
saveButton.addEventListener('click', saveButtonActions);
cardTable.addEventListener('click', deleteDisplayedCards);
cardTable.addEventListener('click', editStar);
cardTable.addEventListener('input', editCardBody);
cardTable.addEventListener("keydown", enterToBlur);

function loadPage() {
  saveButton.disabled = true;
  restoreIdeas();
  restoreMethods();
}

function restoreIdeas() {
  ideaCollection = JSON.parse(localStorage.getItem("ideas")) || [];
}

function enableSaveButton() {
  if (titleInput.value === "" || bodyInput.value === "") {
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
  }
}

function saveButtonActions() {
  instantiateIdea();
  clearCreatorInputs();
}

function hidePrompt() {
  if (ideaCollection.length > 0) {
    prompt.classList.add("hidden");
  }
}

function showPrompt() {
  prompt.classList.remove("hidden");
}

function displayIdeas(ideaInstance) {
  var ideaCard = `
    <div class="card" data-id="${ideaInstance.id}">
        <section class="cards__top card--section">
          <div class="cards__top--left" alt="star-rating"></div>
          <div class="cards__top--right" alt="delete-X"></div>
        </section>
        <section class="cards__middle card--section">
          <h3 class="cards__middle--title" id="editable-title" contenteditable="true">${ideaInstance.title}</h3>
          <p class="cards__middle--text" id="editable-body" contenteditable="true">${ideaInstance.body}</p>
        </section>
        <section class="cards__bottom card--section">
          <img class="cards__bottom--left" src="images/upvote.svg">
          <p class="cards__bottom--text">Quality: ${ideaInstance.quality}</p>
          <img class="cards__bottom--right" src="images/downvote.svg">
        </section>
      </div>`;
  cardTable.insertAdjacentHTML('afterbegin', ideaCard)
  hidePrompt();
}

function instantiateIdea() {
  var star = false;
  var qualityList = ['Swill', 'Plausible', 'Genius'];
  var quality = qualityList[0];
  var ideaInstance = new Idea(Date.now(), titleInput.value, bodyInput.value, star, quality);
  ideaCollection.push(ideaInstance);
  ideaInstance.saveToStorage(ideaCollection);
  displayIdeas(ideaInstance);
}

function clearCreatorInputs() {
  bodyInput.value = "";
  titleInput.value = "";
  saveButton.disabled = true;
}

function restoreMethods() {
  var oldCollection = ideaCollection;
  var newInstances = oldCollection.map(function(datum) {
    datum = new Idea (datum.id, datum.title, datum.body, datum.star, datum.quality);
    return datum;
  }); 
  ideaCollection = newInstances;
  restoreCards(ideaCollection);
}

function restoreCards(ideaCollection) {
  ideaCollection.forEach(function(datum) {
    displayIdeas(datum);
  });
}

function deleteDisplayedCards(e) {
  if (e.target.className === "cards__top--right") {
    var card = e.target.closest('.card');
    card.remove(); 
    var index = findCardIndex(card);
    removeCardData(index);
    if (document.querySelectorAll('.card').length === 0) {
      showPrompt();
    }
  }
}

function findCardIndex(card) {
  var cardId = card.dataset.id;
  return ideaCollection.findIndex(function(item) {
    return item.id == cardId;
  });
}

function removeCardData(index) {
  var ideaIWanttoDelete = ideaCollection[index];
  ideaIWanttoDelete.deleteFromStorage(index);
}

function editCardBody(e) {
  var card = e.target.closest('.card');
  if (e.target.className === 'cards__middle--text') {
    var bodyText = e.target.innerText;
    var index = findCardIndex(card);
    ideaCollection[index].updateBody(bodyText);
    ideaCollection[index].updateIdea();
  }
  if (e.target.className === 'cards__middle--title') {
    var titleText = e.target.innerText;
    var index = findCardIndex(card);
    ideaCollection[index].updateTitle(titleText);
    ideaCollection[index].updateIdea();
  }
}

function editStar(e) {
  var card = e.target.closest('.card');
  if (e.target.className === 'cards__top--left') {
    var index = findCardIndex(card);
    ideaCollection[index].updateStar();
    ideaCollection[index].updateIdea();
    console.log(e.target);
    if (e.target.classList.contains('star')) {
      e.target.classList.remove('star');
    }
    if (e.target.classList !== 'star') {
      e.target.classList.remove('star');
    }
  }
}

function enterToBlur(e) {
  if (e.keyCode === 13) {
    var toBlur = document.getElementById('editable-title');
    toBlur.blur();
  }
  if (e.keyCode === 13) {
    var toBlur = document.getElementById('editable-body');
    toBlur.blur();
  }
}