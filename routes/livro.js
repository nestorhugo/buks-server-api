const { Router } = require("express");
const { getLivros } = require("../controllers/livro");
const router = Router();

router.get("/", getLivros);

module.exports = router;
