const express = require("express");
const rotaLivro = require("./routes/livro");

const app = express();
port = 8001;

app.use("/livros", rotaLivro);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
