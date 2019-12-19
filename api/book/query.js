const con = require('../database');

getAllBooksQuery = () => {
    const query = "SELECT * FROM book";
    return new Promise((resolve, reject) => {
        con.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });
}

getBooksBySubjectQuery = (subject) => {
 //   console.log(subject);
    const query = "SELECT * FROM book WHERE subject = ?";
    return new Promise((resolve, reject) => {
        con.query(query, [subject], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });
}

getBooksByLibraryQuery = (libId) => {
    //   console.log(subject);
       const query = "SELECT * FROM book WHERE library = ?";
       return new Promise((resolve, reject) => {
           con.query(query, [libId], (error, results, fields) => {
               if (error) {
                   reject(error);
               } else {
                   resolve(results);
               }
             });
       });
   }



   getBooksByTitleStringQuery = (strTitle) => {
 
       const query = "SELECT * FROM book WHERE title LIKE %?%";
       return new Promise((resolve, reject) => {
           con.query(query, [strTitle], (error, results, fields) => {
               if (error) {
                   reject(error);
               } else {
                   resolve(results);
               }
             });
       });
   }   


module.exports = {

    getAllBooksQuery,
    getBooksBySubjectQuery,
    getBooksByLibraryQuery,
    getBooksByTitleStringQuery
};