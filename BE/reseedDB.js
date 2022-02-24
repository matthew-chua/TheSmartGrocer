var sqlite = require('sqlite-sync');
const faker = require("faker");

function reseedDB() {
  sqlite.connect('./db/groceries.db'); 
  sqlite.run("DROP TABLE IF EXISTS franchises;", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log('franchises deleted');
    }
  });

  sqlite.run("CREATE TABLE franchises(id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar);", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log('franchises created');
    }
  });

  sqlite.run("DROP TABLE IF EXISTS products;", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log('products deleted');
    }
  });

  sqlite.run("CREATE TABLE products(id INTEGER PRIMARY KEY AUTOINCREMENT, brand varchar, item varchar, imageURL TEXT, country VARCHAR, description TEXT);", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log('products created');
    }
  });

  sqlite.run("DROP TABLE IF EXISTS outlets", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log('outlets deleted');
    }
  });

  sqlite.run("CREATE TABLE outlets(id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar, location TEXT, franchiseID INTEGER, FOREIGN KEY (franchiseID) REFERENCES franchise(id));", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log('outlets created');
    }
  });

  sqlite.run("DROP TABLE IF EXISTS productlistings", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log('productlistings deleted');
    }
  });

  sqlite.run("CREATE TABLE productlistings(id INTEGER PRIMARY KEY AUTOINCREMENT, stock INTEGER, outletID INTEGER, price INTEGER, isOffer INTEGER, link TEXT, productID INTEGER, FOREIGN KEY (outletID) REFERENCES outlet(id), FOREIGN KEY (productID) REFERENCES product(id));", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log('productlistings created');
    }
  });

  //franchise
  sqlite.run(`INSERT INTO franchises (name) VALUES ("NTUC"), ("Giant");`, function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log('franchises seeded');
    }
  });

  //products
  for (let j = 1; j < 11; j++) {
    let brand = faker.company.companyName();
    let item = faker.commerce.productName();
    let imageURL = faker.image.imageUrl();
    let country = faker.address.country();
    let description = faker.commerce.productDescription();

    let sql = `INSERT INTO products (brand, item, imageURL, country, description) VALUES ("${brand}", "${item}", "${imageURL}", "${country}", "${description});`;
    sqlite.run(sql, function (err) {
      if (err.error) {
        console.log(err.error);
      }
    });
  }
  console.log('products seeded');


  //outlets
  for (i = 1; i < 11; i++) {
    let name = faker.address.streetName();
    let location = faker.address.nearbyGPSCoordinate();
    let franchiseID = Math.floor(Math.random() * 2) + 1;

    let sql = `INSERT INTO outlets (name, location, franchiseID) VALUES ("${name}", "${location}", ${franchiseID});`;
    sqlite.run(sql, function (err) {
      if (err.error) {
        console.log(err.error);
      }
    });
  }
  console.log('outlets seeded');

  //productlistings
  for (i = 1; i < 21; i++) {
    let stock = Math.floor(Math.random() * 100);
    let outletID = Math.floor(Math.random() * 10) + 1;
    let price = faker.commerce.price();
    let isOffer = Math.floor(Math.random()) + 1;
    let link = faker.internet.url();
    let productID = Math.floor(Math.random() * 10) + 1;

    let sql = `INSERT INTO productlistings (stock, outletID, price, isOffer, link, productID) VALUES (${stock}, ${outletID}, ${price}, "${description}", ${isOffer}, "${link}", ${productID});`;
    sqlite.run(sql, function (err) {
      if (err.error) {
        console.log(err.error);
      }
    });
  }
  console.log('productlistings seeded');

  sqlite.close();
}

module.exports = {
  reseedDB,
};
