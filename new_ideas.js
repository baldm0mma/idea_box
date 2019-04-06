class Idea {
  constructor(id, title, body) {
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

  deleteFromStorage() {
    ideaCollection.splice(placeholderVariable, 1);
    this.saveToStorage(ideaCollection);

  }

  updateIdea() {
    this.star = !this.star;
  }

  updateQuality() {

  }

}