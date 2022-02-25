var sqlite = require('sqlite-sync');

function returnNearest() {
    // takes in an array of (product_id, quantity) & zip code of user
    // starting from the nearest outlet using googlemaps, check if all products are available based on quantity vs stock
    // once found, return the nearest outlet with all products
    // return multiple if user selects
    sqlite.connect('./db/groceries.db'); 
    arr.forEach(item => {
        let itemID = item.item_id;
        sqlite.run(`SELECT * FROM productlistings WHERE productID = ${itemID}`, function (result) {
            if (result) {
              console.log(result);
            } else {
              console.log('franchises deleted');
            }
          });
      });
    sqlite.close();
}

function returnCheapest() {
    // takes in an array of (product_id, quantity)
    // for each outlet, check if all products are available based on quantity vs stock
    // return the outlet with the cheapest products

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
    returnNearest,
    returnCheapest
  };