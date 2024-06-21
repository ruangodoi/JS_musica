const express = require("express");
const router = express.Router();
const Songs = require("../models/songs");

// Rota para obter todas as músicas
router.get("/", async (req, res) => {
  try {
    const songs = await Songs.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para obter uma música por ID
router.get("/:id", getSongs, (req, res) => {
  res.json(res.songs);
});

// Rota para criar uma música
router.post("/", async (req, res) => {
  const songs = new Songs({
    title: req.body.title,
    singer: req.body.singer,
    genre: req.body.genre,
    duration: req.body.duration,
    releaseDate: req.body.releaseDate,
    album: req.body.album,
    composerProducer: req.body.composerProducer,
  });

  try {
    const newSongs = await songs.save();
    res.status(201).json(newSongs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para atualizar uma música por ID
router.put("/:id", getSongs, async (req, res) => {
  if (req.body.title != null) {
    res.songs.title = req.body.title;
  }
  if (req.body.singer != null) {
    res.songs.singer = req.body.singer;
  }
  if (req.body.genre != null) {
    res.songs.genre = req.body.genre;
  }
  if (req.body.duration != null) {
    res.songs.duration = req.body.duration;
  }
  if (req.body.releaseDate != null) {
    res.songs.releaseDate = req.body.releaseDate;
  }
  if (req.body.album != null) {
    res.songs.album = req.body.album;
  }
  if (req.body.composerProducer != null) {
    res.songs.composerProducer = req.body.composerProducer;
  }

  try {
    const updatedSongs = await res.songs.save();
    res.json(updatedSongs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para excluir uma música por ID
router.delete("/:id", getSongs, async (req, res) => {
  try {
    await res.songs.deleteOne();
    res.json({ message: "Song deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSongs(req, res, next) {
  try {
    const songs = await Songs.findById(req.params.id);
    if (songs == null) {
      return res.status(404).json({ message: "Song not found" });
    }
    res.songs = songs;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
