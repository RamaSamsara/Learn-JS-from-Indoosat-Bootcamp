class Animal {
  #name;
  #age;
  #isMammal;

  constructor(name, age, isMammal) {
    if (typeof name !== 'string') {
      throw new Error('Nama harus berupa string');
    }
    if (typeof age !== 'number') {
      throw new Error('Usia harus berupa angka');
    }
    if (typeof isMammal !== 'boolean') {
      throw new Error('isMammal harus berupa boolean');
    }

    this.#name = name;
    this.#age = age;
    this.#isMammal = isMammal;
  }

  get name() {
    return this.#name;
  }
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Nama harus berupa string');
    }
    this.#name = newName;
  }
  get age() {
    return this.#age;
  }
  set age(newAge) {
    if (typeof newAge !== 'number') {
      throw new Error('Usia harus berupa angka');
    }
    this.#age = newAge;
  }
  get isMammal() {
    return this.#isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true); 
  }
  eat() {
    console.log(`${this.name} sedang makan!`);
  }
} 
class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false);
  }
  fly() {
    console.log(`${this.name} sedang terbang!`);
  }
}

const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);


console.log(myRabbit)
console.log(myEagle)