const express = require('express');
const action = require('./action');
const validator = require('../middleware/validators');

const router = express.Router();

router.get('/books', action.getAllBooksAction);
router.post('/book/subject', action.getBooksBySubjectAction);
router.get('/book/library', action.getBooksByLibraryAction);
router.get('/book/title/:strTitle', action.getBooksByTitleStringAction);
router.post('/book/:user', action.addNewBookAction);
//router.patch('/book/status', action.addNewBookflowAction, action.changeBookStatusAction);
router.patch('/book/status',  action.changeBookStatusAction);
router.post('/book/flow', action.addNewBookflowAction);
router.get('/book/student', action.getStudentBookAction);
router.get('/student/book/:book', action.findBookStudentAction);


module.exports = router;
