var sqlite = require('sqlite-sync');


function fetchStores() {
  sqlite.connect('./db/groceries.db'); 
  sqlite.run("DROP TABLE IF EXISTS franchises;", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log('franchises deleted');
    }
  });
  sqlite.close();
}

const fetchStoreHandler = (req, res) => {
  // const storeID = { storeID: req.params.storeID };
  // Store.findOne(storeID)
  //   .then((result) => {
  //     res.status(200).send(result);
  //   })
  //   .catch((err) => {
  //     res.status(400).send({ error: Constants.invalidRequest });
  //   });
  sqlite.connect('./db/groceries.db');
  sqlite.run("SELECT * FROM outlets", (result) => {
    // receives all the results as an array
    console.log(result);    
    res.status(200).send(result);  
  });
  sqlite.close();
};

module.exports = {
    fetchStoreHandler
  };