var sqlite = require('sqlite-sync');
const faker = require("faker");
var axios = require('axios');

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

    let sql = `INSERT INTO products (brand, item, imageURL, country, description) VALUES ("${brand}", "${item}", "${imageURL}", "${country}", "${description}");`;
    sqlite.run(sql, function (err) {
      if (err.error) {
        console.log(err.error);
      }
    });
  }
  console.log('products seeded');

  let names = [
    "FairPrice Xtra Jurong Point",
    "FairPrice Jurong Point",
    "FairPrice Boon Lay Shopping Complex",
    "FairPrice Yung Kuang Rd",
    "Ntuc Fairprice Co-Operative Ltd",
    "Warehouse Club",
    "NTUC FairPrice - Corporate Office",
    "FairPrice Jurong West St 41",
    "FairPrice Taman Jurong Shopping Centre",
    "FairPrice Bukit Batok West Ave 8",
    "FairPrice Jurong East St 31",
    "FairPrice Xtra JEM",
    "NTUC FairPrice",
    "FairPrice Jurong East St 24",
    "FairPrice Jurong Gateway Road",
    "FairPrice HomeTeamNS Bukit Batok Clubhouse",
    "FairPrice Lot 1 Shoppers' Mall",
    "FairPrice Senja Rd",
    "FairPrice Finest Bukit Panjang Plaza",
    "FairPrice Teban Garden Rd"
  ]

  let place_ids = [
    'ChIJy64vxOwP2jEReg2oFBt1KJ4',
    'ChIJmRnrx-wP2jERsMlAFDWng68',
    'ChIJa_6xD8IP2jERC2e3Q6mjwyg',
    'ChIJhUQT_fsP2jERME0mBqMOnrM',
    'ChIJ5Y80An4P2jER5m4y2uLPn4w',
    'ChIJFbPgo4AF2jERHzHV4MY5d4A',
    'ChIJ9b2mo7UW2jERjxeKvt7j_os',
    'ChIJTX8Iit4P2jERD6kbBNea58g',
    'ChIJc7IqA_sP2jERCSZRunFNMoY',
    'ChIJx1-EDj0Q2jERtWKMqDFGnf0',
    'ChIJtV4cjx8Q2jERMTt5rW87q9Y',
    'ChIJD865Hw8Q2jERXwifyEiU_Bc',
    'ChIJ38NJzO8R2jER4N-hyl5PXb0',
    'ChIJCQwxvxkQ2jERPUH_1hjDwE4',
    'ChIJiWfwdQUQ2jERTrgaZHZT4Pg',
    'ChIJ778v4coR2jERs0gld9MUkC0',
    'ChIJs5CBlukR2jERTIOWORf5ceI',
    'ChIJc1tfUJYR2jERsNqQ4sFo5dU',
    'ChIJUXhrN6MR2jER7xtwryUocpY',
    'ChIJSyI0s6Ua2jERLnh5NwlyrZY'
  ]
  //outlets
  for (let i = 0; i < names.length; i++) {
    let name = String(names[i]);
    let place_id = String(place_ids[i]);
    let sql = `INSERT INTO outlets (name, location, franchiseID) VALUES ("${name}", "${place_id}", 1);`;
    sqlite.run(sql, function (err) {
      if (err.error) {
        console.log(err.error);
      }
    });
  }

  console.log("outlets seeded");

  //productlistings
  for (i = 1; i < 21; i++) {
    let stock = Math.floor(Math.random() * 100);
    let outletID = Math.floor(Math.random() * 10) + 1;
    let price = faker.commerce.price();
    let isOffer = Math.floor(Math.random());
    let link = faker.internet.url();
    let productID = Math.floor(Math.random() * 10) + 1;

    let sql = `INSERT INTO productlistings (stock, outletID, price, isOffer, link, productID) VALUES (${stock}, ${outletID}, ${price}, ${isOffer}, "${link}", ${productID});`;
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
