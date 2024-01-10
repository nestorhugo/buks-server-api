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

function insereLivro(livroNovo) {
  const livros = getTodosLivros();
  livros.push(livroNovo);
  fs.writeFileSync("livros.json", JSON.stringify(livros));
}

function modificaLivro(livroModificado, id) {
  const livros = getTodosLivros();
  const livro = livros.find((livro) => livro.id === id);
  if (!livro) {
    throw new Error("Livro não encontrado");
  }
  livroModificado = { ...livro, ...livroModificado };
  const livrosAtualizados = livros.map((livro) =>
    livro.id === id ? livroModificado : livro
  );
  fs.writeFileSync("livros.json", JSON.stringify(livrosAtualizados));
}

function excluirLivro(id) {
  const livros = getTodosLivros();
  const livro = livros.find((livro) => livro.id === id);
  if (!livro) {
    throw new Error("Livro não encontrado");
  }
  const livrosAtualizados = livros.filter((livro) => livro.id !== id);
  fs.writeFileSync("livros.json", JSON.stringify(livrosAtualizados));
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  getLivroPorAutor,
  insereLivro,
  modificaLivro,
  excluirLivro,
};
