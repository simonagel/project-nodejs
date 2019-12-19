const query = require('./query');

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
      //  console.log(subject);
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
     try{
         const books = await query.getBooksByTitleStringQuery(strTitle);
         res.status(200).send(books);

     }catch (error) {
         res.status(500).send(error);
 
     }
 }



module.exports = {
    getAllBooksAction,
    getBooksBySubjectAction,
    getBooksByLibraryAction,
    getBooksByTitleStringAction
}