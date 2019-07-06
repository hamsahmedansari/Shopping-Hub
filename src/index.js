const express = require("express");
require("./db/mongoose");
const Auth = require("./routers/auth");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/auth", Auth);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
