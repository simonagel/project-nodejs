function Presentation() {
  this.business = new BusinessLayer();

  this.displayElem = () => {
    // localStorage.setItem("reservedBooks", JSON.stringify([]));

    let body = $("body");
    let divHead = $("<div>").attr("class", "divHead");
    body.append(divHead);
    let divTitle = $("<h1>").html("Welcome to E-Library");
    divHead.append(divTitle);
    let divStudentLogin = $("<div>").attr({ "id": "studentLogin", "class": "studentLogin" });
    divHead.append(divStudentLogin);
    let divStudentName = $("<span>").attr({ "id": "studentName", "class": "studentInfo" }).text("STUDENT....."+sessionStorage.ime);
    divStudentLogin.append(divStudentName);
    let divStudentLname = $("<span>").attr({ "id": "studentLname", "class": "studentInfo" }).text(sessionStorage.prezime);
    divStudentLogin.append(divStudentLname);
    let divStudentMail = $("<span>").attr({ "id": "studentMail", "class": "studentInfo" }).text(sessionStorage.emeil);
    divStudentLogin.append(divStudentMail);
    let divImg = $("<div>").attr({ "id": "divImg", "class": "divPocetna1" });
    body.append(divImg);
    let divBlack = $("<div>").attr({ "id": "divBlack", "class": "divBlack" });
    divImg.append(divBlack);
    let divSearch = $("<input/>").attr({ "placeholder": "Type a keyword", "type": "text", "id": "search", "class": "search" });
    divBlack.append(divSearch);

    let searchSubject = $("<button>").attr({ "id": "searchSubject", "class": "btnLog btnSearch" });
    searchSubject.text("SEARCH BY SUBJECT");

    let searchAuthor = $("<button>").attr({ "id": "searchAuthor", "class": "btnLog btnSearch" });
    searchAuthor.text("SEARCH BY AUTHOR");
    
    let searchTitle = $("<button>").attr({ "id": "searchTitle", "class": "btnLog btnSearch" });
    searchTitle.text("SEARCH BY TITLE");

    searchSubject.on("click", this.onSearch);
    searchAuthor.on("click", this.onSearch);
    searchTitle.on("click", this.onSearch);

    divBlack.append(searchSubject);
    divBlack.append(searchAuthor);
    divBlack.append(searchTitle);

    let showReservedBooks = $("<button>").attr({ "id": "showBooks", "class": "btnLog btnSearch showBooks" });
    showReservedBooks.text("MY RESERVED BOOKS");
    showReservedBooks.on("click", (event) => {
        this.displayReservedBooks();
    });
    divBlack.append(showReservedBooks);

    var divContainer = $("<div>").attr({ "id": "container", "class": "container" });
    $(divBlack).append(divContainer);
  }

  this.onSearch = (event) => {
    var input = $("#search").val();
    this.displayBooksByCriteria(input, event.target.id);
  }

  this.displayReservedBooks = function(){
    let books = this.business.getReservedBooks();
    this.displayBooks(books);
  }

  this.displayBooksByCriteria = async (input, searchCriteria) => {
    var books = [];
    if(searchCriteria == "searchSubject"){
      books = await this.business.getBooksBySubj(input);
    }else if(searchCriteria == "searchAuthor"){
      books = await this.business.getBooksByAuth(input);
    }else{
      books = await this.business.getBooksByTitle(input);
    }
    this.displayBooks(books);
  }

  this.displayBooks = async (books) => {
    
    var booksList = JSON.parse(localStorage.getItem('reservedBooks'));
       
    $("#container").empty();
    for (var i = 0; i < books.length; i++) {
      url = "http://covers.openlibrary.org/b/id/" + books[i].coverId + "-M.jpg";
     
      var image = $('<img />', {
        id: 'bookImage' + i,
        class: 'bookImage',
        src: url
      });

      var bookDiv = $('<div >', {
        id: 'divBook' + i,
        class: 'divBook'
      });

      let bookImg = $('<div >', {
        id: 'bookImg' + i,
        class: 'bookImg'
      });

     
      bookImg.append(image);
      bookDiv.append(bookImg);
      
      let divInfo = $("<div>").attr("id", "info");
      
     // var divTitle = $("<span>").attr("class", "sspan").text(books[i].title);

      
      spanTitle = `<b class = "bspan">Title: </b><a href=${books[i].bookUrl} target="_blank">${books[i].title}</a>`;
      let divTitle =   $("<span>").attr("class", "sspan").html(spanTitle);
      spanAuthor = `<b class = "bspan">Author: </b><a href=${books[i].authorUrl} target="_blank">${books[i].author}`;
      let divAuthor = $("<span>").attr("class", "sspan").html(spanAuthor);
      let isAvailable = $("<span>").attr({ "id": "isAvailable"+books[i].coverId, "class": "isAvailable" });
      let reserveButton = $("<button>").attr({ "id": books[i].coverId, "class": "btnReserve" }).text("Reserve Book");

      if(booksList && booksList.includes(String(books[i].coverId))){
        isAvailable.text("Reserved").css("color", "red");
        reserveButton.css("display", "none");
      }else{
        isAvailable.text("Available").css("color", "green");
        reserveButton.css("display", "block");

      }

      // TODO: na available zelen tekst, na reserved crven (razlicen style)

      reserveButton.on("click", (event) => {
        var books = this.business.dataLayer.getBooks();
        this.business.reserveBook(event, books);
      });
      
      bookDiv.append(divInfo);
      divInfo.append($("<br>"));
      divInfo.append(divTitle);
      divInfo.append($("<br>"))
      divInfo.append(divAuthor);
      divInfo.append($("<br>"))
      divInfo.append(isAvailable);
      divInfo.append($("<br>"))
      divInfo.append(reserveButton);
    //  imageDiv.append($("<hr>"))
    $("#container").append(bookDiv);

    }


  };
}
