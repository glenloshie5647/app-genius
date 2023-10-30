/* 
* Filename: sophisticated_complex_code.js
* Description: This code is a complex and sophisticated simulation of a virtual pet game.
*/

class VirtualPet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hunger = 50;
    this.thirst = 50;
    this.energy = 100;
    this.happiness = 100;
    this.health = 100;
    this.age = 0;
  }

  feed() {
    this.hunger -= 10;
    this.thirst += 10;
    this.energy += 5;
    this.happiness += 5;
    this.health += 5;
    console.log(`${this.name} has been fed.`);
  }

  drink() {
    this.thirst -= 10;
    this.energy += 5;
    this.happiness += 5;
    this.health += 5;
    console.log(`${this.name} has been given some water.`);
  }

  play() {
    this.hunger += 5;
    this.thirst += 5;
    this.energy -= 10;
    this.happiness += 10;
    this.health += 5;
    console.log(`${this.name} has played.`);
  }

  sleep() {
    this.hunger += 10;
    this.thirst += 10;
    this.energy += 30;
    this.happiness += 10;
    this.health += 10;
    console.log(`${this.name} has slept.`);
  }

  ageUp() {
    this.age += 1;
    this.hunger += 5;
    this.thirst += 5;
    this.energy -= 5;
    this.happiness -= 5;
    this.health -= 5;
    console.log(`${this.name} has aged up.`);
  }

  checkStatus() {
    console.log(`Name: ${this.name}`);
    console.log(`Type: ${this.type}`);
    console.log(`Hunger: ${this.hunger}`);
    console.log(`Thirst: ${this.thirst}`);
    console.log(`Energy: ${this.energy}`);
    console.log(`Happiness: ${this.happiness}`);
    console.log(`Health: ${this.health}`);
    console.log(`Age: ${this.age}`);
  }
}

const pet1 = new VirtualPet("Fluffy", "Dog");
const pet2 = new VirtualPet("Whiskers", "Cat");

console.log("Initial Status:");
pet1.checkStatus();
pet2.checkStatus();

console.log("-----");

console.log("Interactions:");
pet1.feed();
pet1.drink();
pet1.play();
pet1.sleep();
pet1.ageUp();

console.log("-----");

console.log("Current Status:");
pet1.checkStatus();
pet2.checkStatus();