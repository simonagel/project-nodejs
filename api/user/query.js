const con = require('../database');

regUserQuery = (user, passw) => {
    const query = 'INSERT INTO user(firstName, lastName, eMail, role, isActive, passw0, passw) VALUES (?, ?, ?, ?, ?, ?, ?);';
    return new Promise((resolve, reject) => {
        con.query(query, [user.firstName, user.lastName, user.eMail, user.role, user.isActive, user.passw, passw], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });

}

checkUserQuery = (email) => {
    const query = 'SELECT * FROM user WHERE eMail = ?;';
    return new Promise((resolve, reject) => {
        con.query(query, [email], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });

}

getAllUserQuery = () => {
    const query = "SELECT * FROM user;";
    return new Promise((resolve, reject) => {
        con.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });
};


logUserQuery = (email) => {
    const query = "SELECT * FROM user WHERE eMail = ?";
    return new Promise((resolve, reject) => {
        con.query(query, [email], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });
};

aLoggedUserQuery = (user) => {
    const query = 'INSERT INTO loggeduser(email, password) VALUES (?, ?);';
    return new Promise((resolve, reject) => {
       con.query(query, [user.email, user.password], (error, results, fields) => {
 
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
          });
    });

}

module.exports = {

    regUserQuery,
    checkUserQuery,
    getAllUserQuery,
    logUserQuery,
    aLoggedUserQuery

};