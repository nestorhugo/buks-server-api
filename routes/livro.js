const { Router } = require("express");
const {
  getLivros,
  getLivro,
  getLivroAutor,
  postLivro,
  patchLivro,
  deleteLivro,
} = require("../controllers/livro");
const router = Router();

router.get("/", getLivros);
router.get("/:id", getLivro);
router.get("/autor/ :autor", getLivroAutor);

router.post("/", postLivro);

router.patch("/:id", patchLivro);

router.delete("/:id", deleteLivro);

module.exports = router;
