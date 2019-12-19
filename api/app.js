var express = require('express');
var bodyParser = require('body-parser');
const appRouter = require('./router');
//const logger = require('./middleware/logger');
const errorHandler = require('../api/middleware/error-handler');
//require('dotenv/config');

 const path = require('path');
 require('dotenv').config({ path: path.resolve(__dirname , '../.env') });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: '*/*' }));

app.use('/api', appRouter);
app.use(errorHandler.handler);

app.get('/jas',(req,res) => {
    res.json('se macam so proektov')
})

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`API is listenig on port ${port}!`);
});