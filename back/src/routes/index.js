// const { postFav, deleteFav } = require("../controllers/handleFavorites");
// const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharactersById");
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFavs');
const deleteFav = require('../controllers/deleteFav');

const express = require("express");
const router = express.Router();

router.get("/character/:id", getCharById);

router.get("/login", login);
router.post("/login", postUser);

router.post("/fav/:userId", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = { router };
