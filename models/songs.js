const mongoose = require("mongoose")

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {})
    console.log("CONNECTED TO DATABASE SUCCESSFULLY")
  } catch (error) {
    console.error("COULD NOT CONNECT TO DATABASE:", error.message)
  }


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
})

const Songs = mongoose.model("Songs", songSchema)

module.exports = Songs

}