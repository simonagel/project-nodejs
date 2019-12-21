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
    const query = `SELECT * FROM book WHERE title LIKE '%${strTitle}%'`;
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
 
  addNewBookQuery = (book,user) => {
    let query = "INSERT INTO book (cover_id, title, author, subject, lang, status , library) SELECT ?, ?, ?, ?, ?, ?, library FROM librarian WHERE libanId = ?";
    return new Promise((resolve, reject) => {
        con.query(query, [book.cover_id, book.title, book.author, book.subject, book.lang, book.status, user], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
 
}

changeBookStatusQuery = (status,bookId) => {
  let query = "UPDATE book SET status = ? WHERE cover_id = ? AND status = '1'";
    return new Promise((resolve, reject) => {
    con.query(query, [status,bookId], (error, results, fields) => {
        if (error) {
            reject(error);
        } else {
            resolve(results);
        }
      });
});
}

addNewBookflowQuery = (student, librarian, status, bookId) => {
    
    let query = "INSERT INTO bookflow (student, librarian, action, book) VALUES (?, ?, ?, ?)";
    return new Promise((resolve, reject) => {
       con.query(query, [Number(student), Number(librarian), Number(status), Number(bookId)], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });

}

getStudentBookQuery  = (student) => {
   // const query = "SELECT * FROM bookflow WHERE student = ?";

   const query = `select u.firstName, u.lastName, u.eMail, s.indeks,s.katedra,k.katedraIme, bf.librarian, bf.book, b.title, 
   b.author,b.library, l.libName, action, dateOf from user u 
   join student s on u.eMail = s.email
   join bookflow bf on u.Id = bf.student
   join book b on b.cover_id = bf.book
   join katedra k on s.katedra = k.katedraId
   join library l on b.library = l.libId
   where u.Id = ?`
    return new Promise((resolve, reject) => {
        con.query(query, [student], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });

}

findBookStudentQuery = (book) => {
    const query = `select b.cover_id, b.title, b.author, b.subject, 
    b.library , bf.student, bf.dateOf, bf.action
    from book b
    join bookflow bf on b.cover_id = bf.book
    where b.status = 2 and bf.action = 2 and 
    b.cover_id = ? order by dateOf desc LIMIT 1`;
    return new Promise((resolve, reject) => {
        con.query(query, [book], (error, results, fields) => {
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
    getBooksByTitleStringQuery,
    addNewBookQuery,
    changeBookStatusQuery,
    addNewBookflowQuery,
    getStudentBookQuery,
    findBookStudentQuery
};