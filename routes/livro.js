const { Router } = require("express");
const { getLivros, getLivro } = require("../controllers/livro");
const router = Router();

router.get("/", getLivros);
router.get("/:id", getLivro);

module.exports = router;
