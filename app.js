const express = require("express");
const cors = require("cors");
const rotaLivro = require("./routes/livro");

const app = express();
app.use(cors());
app.use(express.json());
port = 8001;

app.use("/livros", rotaLivro);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
