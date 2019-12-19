const express = require('express');
const action = require('./action');

const router = express.Router();

router.get('/books', action.getAllBooksAction);
router.post('/book/subject', action.getBooksBySubjectAction);
router.get('/book/library', action.getBooksByLibraryAction);
router.get('/book/title/:strTitle', action.getBooksByLibraryAction);

module.exports = router;
