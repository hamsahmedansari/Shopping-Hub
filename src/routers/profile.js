const express = require("express");
const Profiles = require("../models/profiles");
const routes = express.Router();

routes.post("/", async (req, res) => {
  try {
    const profile = await Profiles(req.body).save();
    res.send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = routes;
