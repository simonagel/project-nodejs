const query = require('./query');

const { Student, Book } = require('../middleware/models');


getAllBooksAction = async(req,res) => {
    try{
        const books = await query.getAllBooksQuery();
        res.status(200).send(books);

    }catch (error) {
        res.status(500).send(error);

    }
}

getBooksBySubjectAction = async(req,res) => {
   // console.log(req.body);
    try{
        const subject = req.body.subject;
        console.log(subject);
        const books = await query.getBooksBySubjectQuery(subject);
      //  console.log(books);
        res.status(200).send(books);

    }catch (error) {
        res.status(500).send(error);

    }
}

getBooksByLibraryAction = async(req,res) => {
    // console.log(req.body);
     try{
         const libId = req.body.libId;
         const books = await query.getBooksByLibraryQuery(libId);
         res.status(200).send(books);

     }catch (error) {
         res.status(500).send(error);
 
     }
 }

 getBooksByTitleStringAction = async(req,res) => {
    const strTitle = req.params.strTitle;
    console.log(req.params);
     try{
         const books = await query.getBooksByTitleStringQuery(strTitle);
         res.status(200).send(books);

     }catch (error) {
         res.status(500).send(error);
 
     }
 }

 
 addNewBookAction = async(req,res) => {
     const book = req.body;
     const user = req.params.user;
     try{
      const data = await query.addNewBookQuery(book, user);
       res.status(200).send(data);
     }catch(error){
        res.status(500).send(error.message);
     }
 } 

 changeBookStatusAction = async(req,res) => {
       const status = req.body.status;
       const bookId = req.body.bookId;
     try{
         const book = await query.changeBookStatusQuery(status,bookId);
            if (book.affectedRows == 0){
               res.status(200).json({
                   "affectedRows": book.affectedRows,
                    "message": "Book Can not be issued!!!"
               });
            }else{
               res.status(200).json({
                "affectedRows": book.affectedRows,
                "message": "Book is issued!!!"
               });
            }    
 
       }catch(error){
        res.status(500).send(error.message);
     }
 }

 addNewBookflowAction = async(req,res) => {
    const data = req.body;
    //console.log(data);
    const student = data.student;
    const librarian = data.librarian;
    const status = data.status;
    const bookId = data.bookId;
    try{
      const book = await query.addNewBookflowQuery(student, librarian, status, bookId);
      res.status(200).send("New Bookflow is added !!");
    }catch(error){
       res.status(500).send(error.message);
    }
} 

getStudentBookAction = async(req,res) => {
    try{
        const student = req.body.student;
        console.log(student);
        const result = await query.getStudentBookQuery(student);
      
        const dbStudent = result[0];
        
        if (dbStudent) {
          const student = new Student(dbStudent.firstName, dbStudent.lastName, 
            dbStudent.indeks, dbStudent.eMail, dbStudent.katedraIme);
            console.log(student)
          const books = result.map(x => {
            if (x.book != null) {
                return new Book(x.title, x.author, x.libName, x.action, x.dateOf);
            }
            return null;
            });
            student.books = books[0] ? books : [];
            res.status(200).send(student);  
        }else{
            res.status(200).send("Student not found !!!");
        }

    }catch (error) {
        res.status(500).send(error);

    }
}


findBookStudentAction = async(req,res) => {
    try{
        const book = req.params.book;
        student = await query.findBookStudentQuery(book) 
        res.status(200).send(student);
    }catch{
        res.status(500).send(error);
    }
}

module.exports = {
    getAllBooksAction,
    getBooksBySubjectAction,
    getBooksByLibraryAction,
    getBooksByTitleStringAction,
    addNewBookAction,
    changeBookStatusAction,
    addNewBookflowAction,
    getStudentBookAction,
    findBookStudentAction
}