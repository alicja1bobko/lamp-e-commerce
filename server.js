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
    image: "https://live.staticflickr.com/65535/53101113527_7b1e277e0f_o.jpg",
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
    image: "https://live.staticflickr.com/65535/53102400095_e5c9e5940a_o.jpg",
  },
];

const sale = [
  {
    name: "Como",
    manufacturer: "&Tradition",
    price: 178,
    prevPrice: 211,
    designer: "Space Copenhagen",
    image: "https://live.staticflickr.com/65535/53102549168_8028c71047_o.png",
  },
  {
    name: "Formakami",
    manufacturer: "&Tradition",
    price: 201,
    prevPrice: 247,
    designer: "Jaime Hayon",
    image: "https://live.staticflickr.com/65535/53102247844_d516896b44_o.jpg",
  },
  {
    name: "Flowerpot",
    manufacturer: "&Tradition",
    price: 123,
    prevPrice: 150,
    designer: "Verner Panton",
    image: "https://live.staticflickr.com/65535/53102225684_9a55e9a3cd_o.jpg",
  },
  {
    name: "Tripod",
    manufacturer: "&Tradition",
    price: 247,
    prevPrice: 270,
    designer: "Hvidt & Mølgaard",
    image: "https://live.staticflickr.com/65535/53102448255_eca9bef77c_o.jpg",
  },
  {
    name: "Acorn",
    manufacturer: "Umage",
    price: 87,
    prevPrice: 95,
    designer: "Jacob Rudbeck",
    image: "https://live.staticflickr.com/65535/53102758189_8b0577e15a_o.png",
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

app.get("/api/sale", (req, res) => {
  res.json(sale);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
