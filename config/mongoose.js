const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shivama995:uncommon0@cluster0.gsfip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error Connecting to DB"));

db.once("open", function () {
  console.log("Connected To Database");
});
