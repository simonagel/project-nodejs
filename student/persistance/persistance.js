function PersistanceLayer() {
  
  this.getBooksBySubject = (subject) => {
    console.log(subject);
    return new Promise((resolve, reject) => {
      $.ajax({
        // url: "http://localhost:8080/api/books",
        url: "http://localhost:8080/api/subject",
        type: "POST",
        dataType: "json",
        data: {subject: subject},
        success: function (data) {
          console.log("data");
          console.log(data);
          resolve(data);

        },
        error: function (error) {
          alert('error');
          reject(error);
        }
      });
    });
  };
  
  this.getBooksByAuthor = (author) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "http://openlibrary.org/search.json?author=" + author,
        type: "GET",
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          alert('error');
          reject(error);
        }
      });
    });
  };

  this.getBooksByTitle = (title) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "http://openlibrary.org/search.json?title=" + title,
        type: "GET",
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          alert('error');
          reject(error);
        }
      });
    });
  };

  this.saveUser = (user) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "http://localhost:8080/api/users",
        type: "POST",
        data: user,
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          alert('error');
          reject(error);
        }
      });
    });
  };
}




