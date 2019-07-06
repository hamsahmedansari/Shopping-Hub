const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid!");
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

profileSchema.pre("save", async function(next) {
  const profile = this;

  console.log(profile.password, "updated password");
  if (profile.isModified("password")) {
    profile.password = await bcrypt.hash(profile.password, 8);
  }
  console.log(profile.password, "hashed password");
  next();
});

profileSchema.statics.findByCredentials = async (email, password) => {
  const profile = await Profiles.findOne({ email });

  if (!profile) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, profile.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return profile;
};

const Profiles = mongoose.model("Profiles", profileSchema);

module.exports = Profiles;
