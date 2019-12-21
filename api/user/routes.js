const express = require('express');
const action = require('./action');
const checkToken = require('../middleware/check-token');
const userValidator = require('../middleware/user-validator');

const router = express.Router();


router.post('/user', userValidator, action.regUserAction);
router.post('/check', action.checkUserAction);
router.post('/user/login', action.logUserAction);
router.post('/logged', action.aLoggedUserAction);
router.get('/users', checkToken.checkToken, action.getAllUserAction);


module.exports = router;


