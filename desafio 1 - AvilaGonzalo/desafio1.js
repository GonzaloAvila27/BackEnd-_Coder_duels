
  class User {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        this.books = [];
        this.pets = [];
    }

    getFullName() {
        return `Su nombre es ${this.name} ${this.lastname},`;
    }

    addPet(petName) {
        this.pets.push(petName);
    }

    countPets() {
        return  `además, tiene ${this.pets.length} mascotas.`;
    }

    addBook(title, author) {
        this.books.push({title, author});
    }

    getBookNames() {
        return `sus libros favoritos son: ${this.books.map( (book) => book.title)} y `;
    }
}



const UserA = new User("Roman", "Cobalzky");
UserA.addPet ('Top');
UserA.addPet ('Diana');
UserA.addPet ('Rinno');
UserA.addBook ("History I", "Herodotus");
UserA.addBook (" y ", "trampita");
UserA.addBook ("Lord of the Rings", "J.R.R. Tolkien");



console.log(UserA.getFullName(), UserA.getBookNames(), UserA.countPets()); 