function DataLayer() {
    this.books = {};
    this.persistance = new PersistanceLayer();

    this.getBooksBySubject = async (input) => {
        var result = await this.persistance.getBooksBySubject(input);
        var resolvedBooks = [];
     //   console.log(result);
        var booksData = result.works;
        var reservedBooks = JSON.parse(localStorage.getItem('reservedBooks'));

        for (let i = 0; i < booksData.length; i++) {
            if (booksData[i].cover_id) {

                let isAvailable = true;
                if (reservedBooks.includes(String(booksData[i].cover_id))) {
                    isAvailable = false;
                }
                var tempBook = {
                    title: booksData[i].title,
                    author: booksData[i].authors.map((author) => author.name).join(', '),
                    coverId: booksData[i].cover_id,
                    available: isAvailable,
                    bookUrl: 'https://openlibrary.org' + booksData[i].key,
                    authorUrl: 'https://openlibrary.org' + booksData[i].authors[0].key,
                }
                resolvedBooks.push(tempBook);
            }
        }
        this.books = resolvedBooks;
    };

    this.getBooksByAuthor = async (input) => {
        var result = await this.persistance.getBooksByAuthor(input);
        result = JSON.parse(result);
        var resolvedBooks = [];
        var booksData = result.docs;
        var reservedBooks = JSON.parse(localStorage.getItem('reservedBooks'));

        for (let i = 0; i < booksData.length; i++) {
            if (booksData[i].cover_i) {
                let isAvailable = true;
                if (reservedBooks.includes(String(booksData[i].cover_i))) {
                    isAvailable = false;
                }
                var tempBook = {
                    title: booksData[i].title,
                    author: booksData[i].author_name[0],
                    coverId: booksData[i].cover_i,
                    available: isAvailable,
                    bookUrl: 'https://openlibrary.org' + booksData[i].key,
                    authorUrl: 'https://openlibrary.org/authors/' + booksData[i].author_key[0],
                }
                resolvedBooks.push(tempBook);
            }
        }
        this.books = resolvedBooks;
    };

    this.getBooksByTitle = async (input) => {
        var result = await this.persistance.getBooksByTitle(input);
        result = JSON.parse(result);
        var resolvedBooks = [];
        var booksData = result.docs;
        var reservedBooks = JSON.parse(localStorage.getItem('reservedBooks'));

        for (let i = 0; i < booksData.length; i++) {
            if (booksData[i].cover_i) {
                let isAvailable = true;
                if (reservedBooks.includes(String(booksData[i].cover_i))) {
                    isAvailable = false;
                }
                var tempBook = {
                    title: booksData[i].title,
                    author: !booksData[i].author_name ? 'Unknown' : booksData[i].author_name[0],
                    coverId: booksData[i].cover_i,
                    available: isAvailable,
                    bookUrl: 'https://openlibrary.org' + booksData[i].key,
                    authorUrl: !booksData[i].author_key ? null : 'https://openlibrary.org/authors/' + booksData[i].author_key[0],
                  
                }
                resolvedBooks.push(tempBook);
            }
        }
        this.books = resolvedBooks;
    };


    this.getBooks = () => {
        return this.books;
    };

}