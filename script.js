class User {
  constructor(firstname, lastname, age, location) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.location = location;
  }
  vsAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstname} ${this.lastname} è più vecchio di ${otherUser.firstname} ${otherUser.lastname}`;
    } else
      return `${otherUser.firstname} ${otherUser.lastname} è più vecchio di ${this.firstname} ${this.lastname}`;
  }
}

const user1 = new User("Giacomo", "Morandi", 23, "Canosa");
const user2 = new User("Giovanni", "Verdi", 24, "Andria");

console.log(user1.vsAge(user2));


class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    verifyTrue(animal) {
        return this.ownerName === animal.ownerName;
    }
}

const pet1 = new Pet("Sirio", "Gianni", "Gatto", "europeo")
const pet2 = new Pet("Bob", "Gianni", "Cane", "labrador")

console.log(pet1.verifyTrue(pet2))


document.forms[0].addEventListener("submit", e => {
    e.preventDefault()
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
    const animalDiv = document.getElementsByClassName("animals")[0];
    
    const pet = new Pet(petName, ownerName, species, breed);

    const newOl = document.createElement("ol");
    newOl.innerHTML = `<strong>Animale</strong>
    <li>Nome del Pet: ${petName}</li>
    <li>Nome del Proprietario: ${ownerName}</li>
    <li>Nome della specie: ${species}</li>
    <li>Nome della razza: ${breed}</li>
    `;
    animalDiv.appendChild(newOl);
})