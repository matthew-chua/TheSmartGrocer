var sqlite = require("sqlite-sync");
const faker = require("faker");
var axios = require("axios");

function reseedDB() {
  sqlite.connect("./db/groceries.db");
  sqlite.run("DROP TABLE IF EXISTS franchises;", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log("franchises deleted");
    }
  });

  sqlite.run(
    "CREATE TABLE franchises(id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar);",
    function (err) {
      if (err.error) {
        console.log(err.error);
      } else {
        console.log("franchises created");
      }
    }
  );

  sqlite.run("DROP TABLE IF EXISTS products;", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log("products deleted");
    }
  });

  sqlite.run(
    "CREATE TABLE products(id INTEGER PRIMARY KEY AUTOINCREMENT, brand varchar, item varchar, imageURL TEXT, country VARCHAR, description TEXT);",
    function (err) {
      if (err.error) {
        console.log(err.error);
      } else {
        console.log("products created");
      }
    }
  );

  sqlite.run("DROP TABLE IF EXISTS outlets", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log("outlets deleted");
    }
  });

  sqlite.run(
    "CREATE TABLE outlets(id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar, location TEXT, franchiseID INTEGER, FOREIGN KEY (franchiseID) REFERENCES franchise(id));",
    function (err) {
      if (err.error) {
        console.log(err.error);
      } else {
        console.log("outlets created");
      }
    }
  );

  sqlite.run("DROP TABLE IF EXISTS productlistings", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log("productlistings deleted");
    }
  });

  sqlite.run(
    "CREATE TABLE productlistings(id INTEGER PRIMARY KEY AUTOINCREMENT, stock INTEGER, outletID INTEGER, price INTEGER, isOffer INTEGER, link TEXT, productID INTEGER, FOREIGN KEY (outletID) REFERENCES outlet(id), FOREIGN KEY (productID) REFERENCES product(id));",
    function (err) {
      if (err.error) {
        console.log(err.error);
      } else {
        console.log("productlistings created");
      }
    }
  );

  //franchise
  sqlite.run(
    `INSERT INTO franchises (name) VALUES ("NTUC"), ("Giant");`,
    function (err) {
      if (err.error) {
        console.log(err.error);
      } else {
        console.log("franchises seeded");
      }
    }
  );

  //products
  let brands = ["Meiji", "Marigold", "Tiger", "Heineken", "Dettol"];
  let items = ["Milk", "Yoghurt", "Beer", "Beer", "Soap"];
  let imageURLs = [
    "https://www.nicepng.com/ourpic/u2e6w7y3a9t4w7u2_every-drop-of-meiji-pasteurized-milk-is-made/",
    "https://www.nicepng.com/ourpic/u2e6w7y3a9t4w7u2_every-drop-of-meiji-pasteurized-milk-is-made/",
    "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/63488_XL1_20210119.jpg?w=1200&q=70",
    "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/10943643_XL1_20210217.jpg?w=1200&q=70",
    "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/11224253_XL1_20211014.jpg?w=1200&q=70",
  ];
  let countries = ["Singapore", "India", "Thailand", "Indonesia", "Malaysia"];
  let descriptions = [
    "delicious and enriching milk",
    "tasty yoghurt for the whole family!",
    "refreshing and full bodied lager beer",
    "pale lager beer with 5% alcohol",
    "Contains antibacterial agents that provide you 100% trusted Dettol protection",
  ];
  for (let j = 0; j < brands.length; j++) {
    let brand = brands[j];
    let item = items[j];
    let imageURL = imageURLs[j];
    let country = countries[j];
    let description = descriptions[j];

    let sql = `INSERT INTO products (brand, item, imageURL, country, description) VALUES ("${brand}", "${item}", "${imageURL}", "${country}", "${description}");`;
    sqlite.run(sql, function (err) {
      if (err.error) {
        console.log(err.error);
      }
    });
  }
  console.log("products seeded");

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
    "FairPrice Teban Garden Rd",
  ];

  let place_ids = [
    "ChIJy64vxOwP2jEReg2oFBt1KJ4",
    "ChIJmRnrx-wP2jERsMlAFDWng68",
    "ChIJa_6xD8IP2jERC2e3Q6mjwyg",
    "ChIJhUQT_fsP2jERME0mBqMOnrM",
    "ChIJ5Y80An4P2jER5m4y2uLPn4w",
    "ChIJFbPgo4AF2jERHzHV4MY5d4A",
    "ChIJ9b2mo7UW2jERjxeKvt7j_os",
    "ChIJTX8Iit4P2jERD6kbBNea58g",
    "ChIJc7IqA_sP2jERCSZRunFNMoY",
    "ChIJx1-EDj0Q2jERtWKMqDFGnf0",
    "ChIJtV4cjx8Q2jERMTt5rW87q9Y",
    "ChIJD865Hw8Q2jERXwifyEiU_Bc",
    "ChIJ38NJzO8R2jER4N-hyl5PXb0",
    "ChIJCQwxvxkQ2jERPUH_1hjDwE4",
    "ChIJiWfwdQUQ2jERTrgaZHZT4Pg",
    "ChIJ778v4coR2jERs0gld9MUkC0",
    "ChIJs5CBlukR2jERTIOWORf5ceI",
    "ChIJc1tfUJYR2jERsNqQ4sFo5dU",
    "ChIJUXhrN6MR2jER7xtwryUocpY",
    "ChIJSyI0s6Ua2jERLnh5NwlyrZY",
  ];
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
  for (i = 0; i < 20; i++) {
    let stock = Math.floor(Math.random() * 100);
    let outletID = Math.floor(Math.random() * 20) + 1;
    let price = Math.floor(Math.random() * 20) + 1;
    let isOffer = Math.floor(Math.random() * 2);
    let link = faker.internet.url();
    let productID = Math.floor(Math.random() * 5) + 1;

    let sql = `INSERT INTO productlistings (stock, outletID, price, isOffer, link, productID) VALUES (${stock}, ${outletID}, ${price}, ${isOffer}, "${link}", ${productID});`;
    sqlite.run(sql, function (err) {
      if (err.error) {
        console.log(err.error);
      }
    });
  }
  console.log("productlistings seeded");

  sqlite.close();
}

module.exports = {
  reseedDB,
};
