const express = require("express");
const Profiles = require("../models/profiles");
const routes = express.Router();
const auth = require("../middleware/auth");
// Create Users
routes.post("/", async (req, res) => {
  try {
    const profile = await Profiles(req.body).save();
    res.send(profile);
  } catch (e) {
    res.status(400).send(e);
  }
});
// Login Users
routes.post("/login", async (req, res) => {
  try {
    const profile = await Profiles.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await profile.generateAuthToken();
    res.send({ profile, token });

    res.send({ profile, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = routes;
