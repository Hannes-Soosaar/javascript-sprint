class Pet {
	constructor(name, age, species) {
		this.name = name;
		this.age = age;
		this.species = species;
	}
	makeSound() {
		console.log(`I am a ${this.species}`);
	}
}

const pet = new Pet("Teri", 10, "Bird");
pet.makeSound();

class Dog extends Pet {
	constructor(name, age, breed, favoriteToy) {
		super(name, age);
        this.species= "Dog"
		this.breed = breed;
		this.favoriteToy = favoriteToy;
	}

	makeSound() {
		super.makeSound();
	}

	fetch() {
		console.log(`I am a ${this.name} is fetching its ${this.favoriteToy}`);
	}
}

const dog = new Dog("Bruno", 7, "Spaniel", "tennis ball");
dog.makeSound();
dog.fetch();

class Cat extends Pet {
	constructor(name, age , color, favoriteNapSpot) {
		super(name, age);
        this.species = "Cat"
        this.color = color;
		this.favoriteNapSpot = favoriteNapSpot;
	}
	makeSound() {
		super.makeSound();
	}
	purr() {
		console.log(`${this.name} purrs on ${this.favoriteNapSpot}`);
	}
}

const cat = new Cat("Paws", 2, "black and white", "mat");
cat.makeSound();
cat.purr();
