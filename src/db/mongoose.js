const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/shopping-hub", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(console.log("Db Connected"));
