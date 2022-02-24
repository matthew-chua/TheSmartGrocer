const Store = require("./storeSchema");
// const Constants = require("../Common/Constants");

const fetchStoreHandler = (req, res) => {
  const storeID = { storeID: req.params.storeID };
  res.status(200).send("Hello World");
  
  Store.findOne(storeID)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send({ error: Constants.invalidRequest });
    });
};

module.exports = {
    fetchStoreHandler
  };