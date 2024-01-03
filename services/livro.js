const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
  const livros = getTodosLivros();
  const livro = livros.find((livro) => livro.id === id);
  if (!livro) {
    throw new Error("Livro não encontrado");
  }
  return livro;
}

function getLivroPorAutor(autor) {
  const livros = getTodosLivros();
  const livrosDoAutor = livros.filter((livro) => livro.autor === autor);
  if (livrosDoAutor.length === 0) {
    throw new Error("Nenhum livro encontrado");
  }
  return livrosDoAutor;
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  getLivroPorAutor,
};
