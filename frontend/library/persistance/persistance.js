function PersistanceLayer() {
  // subject
  this.getBooksBySubject = (subject) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "http://openlibrary.org/subjects/" + subject + ".json?details=true",
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









}




