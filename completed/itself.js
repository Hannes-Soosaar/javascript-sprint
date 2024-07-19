const selfReferencingObject = {
	itself: null,
	setItself() {
		this.itself = this;
		return this;
	},
}.setItself();
