var sqlite = require('sqlite-sync');

const fetchProductHandler = (req, res) => {
    let keyword = req.params.keyword;
    sqlite.connect('./db/groceries.db');
    sqlite.run(`SELECT * FROM products WHERE id = ${keyword}`, (result) => {
        console.log(result);    
        res.status(200).send(result);  
    });
    sqlite.close();
};

module.exports = {
    fetchProductHandler
  };