

class Idea {
	constructor(title, body, id, quality, star) {
		this.title = title;
		this.body = body;
		this.id = id;
		this.star = false;
		this.quality = quality;
		this.qualityLevels = ["swill", "plausible", "genius"]; 
	}

	saveToStorage() {
		var newString = JSON.stringify(ideaArray);
		localStorage.setItem("ideas", newString);
		// JSON.parse(localStorage.getItem("ideas", ideaArray));
	}

	deleteFromStorage() {
		//localStorage is actually being overwritten, not really 'deleted'?
	}

	updateIdea() {
		localStorage.setItem("ideas", ideaArray);
		//cannot update with an empty title or body
	}

	updateQuality() {
		localStorage.setItem("ideas", ideaArray);
	}

	updateStar() {
		this.star = true;
	}
}