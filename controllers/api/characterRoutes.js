const express = require("express");
const router = express.Router();
const { User, Character } = require("../../models");
const {withAuth} = require("../../utils/tokenAuth")

// GET ALL
router.get("/", (req, res) => {
  Character.findAll()
    .then((characters) => {
      res.json(characters);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// GET ONE
router.get("/:id", (req, res) => {
  Game.findByPk(req.params.id, {
    include: [Note],
  })
    .then((character) => {
      if (!character) {
        return res.status(404).json({ msg: "no record found!" });
      }
      res.json(character);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// CREATE
router.post("/",withAuth, (req, res) => {
  //TODO: protecc route, get UserId from token
  console.log(req.user)
  Character.create({
      character_name:req.body.character_name,
      class:req.body.class,
      level:req.body.level,
      UserId:req.user
  })
    .then((newCharacter) => {
      res.json(newCharacter);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

// UPDATE ONE
router.put("/:id", withAuth,(req, res) => {
  Character.update(req.body, {
    where: {
      id: req.params.id,
      UserId:req.user
    },
  })
    .then((updatedCharacter) => {
      if (!updatedCharacter[0]) {
        return res.status(404).json({ msg: "no such Character" });
      }
      res.json(updatedGame);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

// DELETE ONE
router.delete("/:id", withAuth,(req, res) => {
  Character.destroy({
    where: {
      id: req.params.id,
      UserId:req.user
    },
  })
    .then((delCharacter) => {
      if (!delCharacter) {
        return res.status(404).json({ msg: "no such Character" });
      }
      res.json(delCharacter);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occurred", err });
    });
});

module.exports = router;