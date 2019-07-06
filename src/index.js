const express = require("express");
require("./db/mongoose");
const Profile = require("./routers/profile");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/profile", Profile);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
