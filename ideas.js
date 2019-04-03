var ideas = JSON.parse(localStorage.getItem("ideas", ideas)) || [];


class Idea {
	constructor(title, body, id, quality) {
		this.title = title;
		this.body = body;
		this.id = id;
		this.star = false;
		this.quality = quality;
	}

	saveToStorage() {
		localStorage.setItems("ideas", ideas);
	}

	deleteFromStorage() {
		//localStorage is actually being overwritten, not really 'deleted'
	}

	updateIdea() {
		localStorage.setItems("ideas", ideas);
		//cannot update with an empty title or body
	}

	updateQuality() {
		localStorage.setItems("ideas", ideas);
	}
}
