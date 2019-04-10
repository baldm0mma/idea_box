class Idea {
  constructor(id, title, body, star, quality) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
    this.qualityList = ['Swill', 'Plausible', 'Genius'];
    this.quality = this.qualityList[0];
  }

  saveToStorage() {
    var stringifiedIdeas = JSON.stringify(ideaCollection);
    localStorage.setItem("ideas", stringifiedIdeas);
  }

  deleteFromStorage(collectionIndex) {
    ideaCollection.splice(collectionIndex, 1);
    this.saveToStorage(); 
  }

  updateBody(newBody) {
    this.body = newBody;
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }

  updateIdea() {
    this.saveToStorage();
  }

  updateQuality() {

  }

  // static createFromJSON(string) {
  //   let stuff = JSON.parse(string);

  // } 

}