const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  singer: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  composerProducer: {
    type: String,
    required: true,
  },
});

const Songs = mongoose.model("Songs", songSchema);

module.exports = Songs;
