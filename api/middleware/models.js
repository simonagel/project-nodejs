class Student {
    constructor(name, surname, indeks, email, katedra, books) {
        this.name = name;
        this.surname = surname;
        this.indeks = indeks;
        this.email = email
        this.katedra = katedra
        this.books = books
    }
}

class Book {
    constructor(title, author,  library, action , dateOf) {
        this.title = title;
        this.author = author;
        this.library = library;
        this.action = action;
        this.dateOf = dateOf;
    }
}

module.exports = {
    Student,
    Book
};