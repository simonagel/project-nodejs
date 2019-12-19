const express = require('express');
const  router = express.Router();


const bookRoutes = require('./book/routes');
const regRoutes = require('./user/routes')


router.use(bookRoutes);
router.use(regRoutes);

module.exports = router;