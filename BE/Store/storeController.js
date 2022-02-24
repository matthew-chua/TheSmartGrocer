var sqlite = require('sqlite-sync');

const fetchStoreHandler = (req, res) => {
  sqlite.connect('./db/groceries.db');
  sqlite.run("SELECT * FROM outlets", (result) => {
    console.log(result);    
    res.status(200).send(result);  
  });
  sqlite.close();
};

module.exports = {
    fetchStoreHandler
  };