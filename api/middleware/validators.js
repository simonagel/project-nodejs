const con = require('../database');

const validateChangeBookStatus =  (req, res, next) => {
  
    let query = "SELECT status FROM book WHERE cover_id == ?"
    return Promise((resolve, reject) => {
        con.query(query, [req.bookId], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
                next();
            }
        })
    })
}

module.exports = {
    validateChangeBookStatus
}