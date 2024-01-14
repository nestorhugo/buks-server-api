const { Router } = require("express");
const {
  getFavoritos,
  postFavorito,
  deleteLivroFavorito,
} = require("../controllers/favorito");
const router = Router();

router.get("/", getFavoritos);

// router.get("/:id", getFavoritoPorId);

router.post("/:id", postFavorito);

router.delete("/:id", deleteLivroFavorito);

module.exports = router;
