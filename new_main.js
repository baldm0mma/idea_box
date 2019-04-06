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
var ideas;

// Add Event Listeners

window.addEventListener('load', loadPage);

titleInput.addEventListener('keyup', enableSaveButton);
bodyInput.addEventListener('keyup', enableSaveButton);
saveButton.addEventListener('click', saveButtonActions);

editTitle.addEventListener('click', );
editBody.addEventListener('click', );

// Add Functions 

function loadPage() {
  saveButton.disabled = true;
  restoreIdeas();
/* need a placeholder to appear in empty card table | 
idea should be persisted on page reload: 
    (fetch data from localStorage, 
    parse data from localStorage, repopulate objects with methods)
*/
}

function restoreIdeas() {
  ideas = JSON.parse(localStorage.getItem("ideas")) || [];
}

function enableSaveButton() {
  if (titleInput.value === "" || bodyInput.value === "") {
    saveButton.disabled = true;
  } else {
    saveButton.disabled = false;
  }
}

function saveButtonActions() {
  hidePrompt();
  /* needs to populate the DOM | 
  needs to stringify and then save to storage |
  needs to make the placeholder go away | 
  clear text fields | 
  page should not reload | 

  */
}

function hidePrompt() {
  prompt.classList.add("hidden");
}



