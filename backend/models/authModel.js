const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    createdDate: {
      type: Date,
      default: Date.now,
    },
  },

  {
    collation: "auths",
  }
);

module.exports = mongoose.model("auths", authSchema);
