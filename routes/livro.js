const { Router } = require("express");
const {
  getLivros,
  getLivro,
  getLivroAutor,
  postLivro,
} = require("../controllers/livro");
const router = Router();

router.get("/", getLivros);
router.get("/:id", getLivro);
router.get("/autor/ :autor", getLivroAutor);

router.post("/", postLivro);

module.exports = router;
