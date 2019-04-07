// Add Global Variables

var form1Button = document.querySelector(".sidebar__form1--button");
var form2Input = document.querySelector(".sidebar__form2--input");
var form2Button = document.querySelector(".sidebar__form2--button");
var titleInput = document.querySelector(".creator__form--title--input");
var bodyInput = document.querySelector(".creator__form--body--input");
var saveButton = document.querySelector(".creator__form--button");
var searchBox = document.querySelector(".creator__search");
var cardTable = document.querySelector(".ideas");
var editTitle = document.querySelector(".cards__middle--title");
var editBody = document.querySelector(".cards__middle--text");
var prompt = document.querySelector(".card__ideaprompt");
var ideaCollection;

// Add Event Listeners

window.addEventListener('load', loadPage);

titleInput.addEventListener('keyup', enableSaveButton);
bodyInput.addEventListener('keyup', enableSaveButton);
saveButton.addEventListener('click', saveButtonActions);

// editTitle.addEventListener('click', );
// editBody.addEventListener('click', );

// Add Functions 

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

function displayIdeas(ideaInstance) {
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
  cardTable.insertAdjacentHTML('afterbegin', ideaCard)
  hidePrompt();
}

function instantiateIdea() {
  var id = Date.now();
  var title = titleInput.value;
  var body = bodyInput.value;
  var star = false;
  var qualityList = ['Swill', 'Plausible', 'Genius'];
  var quality = qualityList[0];
  var ideaInstance = new Idea(id, title, body, star, quality);
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

