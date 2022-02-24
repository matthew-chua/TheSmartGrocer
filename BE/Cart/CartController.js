var sqlite = require('sqlite-sync');

function keywordSearch() {
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

module.exports = {
    fetchStoreHandler
  };