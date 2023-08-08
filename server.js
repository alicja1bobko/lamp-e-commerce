const express = require("express");
const app = express();

// handling CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const bestsellers = [
  {
    name: "Branching Bubbles",
    manufacturer: "Lindsey Adelman Studio",
    price: 25200,
    prevPrice: 28800,
    designer: "Lindsay Adelman",
    image: "https://live.staticflickr.com/65535/53101113527_4bbf542128_w.jpg",
  },
  {
    name: "Arrangements",
    manufacturer: "Flos",
    price: 1400,
    prevPrice: 1600,
    designer: "Michael Anastassiades",
    image: "https://live.staticflickr.com/65535/53102181228_7f17d85b98_w.jpg",
  },
  {
    name: "Mesh",
    manufacturer: "Luce Plan",
    price: 3200,
    prevPrice: 3600,
    designer: "Francisco Gomez Paz",
    image: "https://live.staticflickr.com/65535/53101113532_dd300393c8_w.jpg",
  },
  {
    name: "PH 5",
    manufacturer: "louis poulsen",
    price: 920,
    prevPrice: 1100,
    designer: "Louis Poulsen",
    image: "https://live.staticflickr.com/65535/53101675076_03202b12a8_w.jpg",
  },
];

// route for handling requests from the Angular client
app.get("/api/bestsellers", (req, res) => {
  res.json(bestsellers);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
