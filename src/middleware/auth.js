const jwt = require("jsonwebtoken");
const config = require("../config");
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded_token = jwt.verify(token, config.jwtToken);
    req.token = token;
    req.userId = decoded_token._id;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please login first." });
  }
};
module.exports = auth;
