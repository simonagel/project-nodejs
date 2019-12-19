const query = require('./query');
const Joi = require("@hapi/joi");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const userSchema = {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    eMail: Joi.string().required(),
    role: Joi.string().required(),
    isActive: Joi.string().required(),
    passw:Joi.string().required
}

regUserAction = async (req, res, next) => {

   try {
        const userRequest = req.body;
        const hashPassw = bcrypt.hashSync(userRequest.passw, 10);
        const user = await query.regUserQuery(userRequest, hashPassw);
       res.status(201).send('registaered user is created in DB');
    } catch (error) {
        res.status(500).send(error);

    } 
}

checkUserAction = async (req, res, next) => {
    try {
        const email = req.body.eMail;
        const regUser = await query.checkUserQuery(email);
        if (regUser) {
            res.status(402).send("this email is alredy registered...login!!!");
        }

    } catch(error){
        res.status(500).send(error.message);
    }
}

getAllUserAction = async (req, res) => {
    try {
        const users = await query.getAllUserQuery();
        res.status(200).send(users);

    } catch{
        res.status(500).send(error.message);
    }
}

logUserAction = async (req, res) => {
    const email = req.body.eMail;
    const pass = req.body.passw;


    try {
        var user = await query.logUserQuery(email);
        var dbUser = user[0];

        if (user.length == 0) {
            res.status(402).send("User does not exist");
        }

        const matchPass = bcrypt.compareSync(pass, dbUser.passw);
        if (matchPass) {
             //console.log(dbUser);
            //if user log in success, generate a JWT token for the user with a secret key
            jwt.sign({ dbUser }, process.env.ACCESS_TOKEN_SECRET,(err, token) => {
                if(err) { console.log(err) }
                console.log(token);
     
                res.status(200).json({
                     success: true,
                     message: 'Authentication successful!',
                    token: token
                }); 
            }); 
            // res.status(200).send("Authentication successful"); 
        } else {
            res.status(403).json({
                success: false,
                message: 'Incorrect username or password'
            });

        }

    } catch (error) {
        res.status(500).send(error);
    }
};

aLoggedUserAction = async (req, res) => {
    try {
        const user = req.body;
        await query.aLoggedUserQuery(user);
        res.status(201).send('user is logged in DB');
    } catch{
        res.status(500).send(error);
    }

}

 
module.exports = {
    regUserAction,
    checkUserAction,
    getAllUserAction,
    logUserAction,
    aLoggedUserAction
}