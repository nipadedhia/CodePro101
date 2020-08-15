const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  image: { type: String },
});

const Product = mongoose.model("Product", productSchema);

Product.create(
  {
    name: "HTML",
    price: 300,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1597505942/CodePro/html5-512_yzegtf.webp",
  },
  {
    name: "CSS",
    price: 300,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1594929482/CodePro/CSS3_owe731.jpg",
  },
  {
    name: "JavaScript",
    price: 500,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1597506386/CodePro/javascript1_humybu.jpg",
  },
  {
    name: "JQuery",
    price: 300,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1597509847/CodePro/JQuery_olaij2.png",
  },
  {
    name: "nodeJS",
    price: 400,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1597509041/CodePro/nodeJS2_igujhr.jpg",
  },
  {
    name: "ReactJS",
    price: 700,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1594929482/CodePro/ReactJS_kte76g.png",
  },
  {
    name: "mongoDB",
    price: 500,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1597507319/CodePro/mongoDB1_sxrsyg.jpg",
  },
  {
    name: "Angular",
    price: 1000,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1594929482/CodePro/AngularJS_azdtw2.png",
  },
  {
    name: "Java",
    price: 1000,
    image:
      "https://res.cloudinary.com/dbiqi3f0h/image/upload/v1597507671/CodePro/Java_ls81ca.jpg",
  },

  Product.db.dropCollection("products", function (err, result) {
    console.log(result);
  }),
);

module.exports = Product;
