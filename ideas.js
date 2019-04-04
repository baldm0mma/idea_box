var ideaArray = JSON.parse(localStorage.getItem("ideas", ideaArray)) || [];


class Idea {
	constructor(title, body, id, quality) {
		this.title = title;
		this.body = body;
		this.id = id;
		this.star = false;
		this.quality = quality;
	}

	saveToStorage() {
		JSON.stringify(ideaArray);
		localStorage.setItem("ideas", ideaArray);
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
}
