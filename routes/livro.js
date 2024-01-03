const { Router } = require("express");
const { getLivros, getLivro, getLivroAutor } = require("../controllers/livro");
const router = Router();

router.get("/", getLivros);
router.get("/:id", getLivro);
router.get("/autor/ :autor", getLivroAutor);

module.exports = router;
