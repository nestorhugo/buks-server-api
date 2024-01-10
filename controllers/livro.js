const {
  getTodosLivros,
  getLivroPorId,
  getLivroPorAutor,
  insereLivro,
  modificaLivro,
  excluirLivro,
} = require("../services/livro");

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;
    const livro = getLivroPorId(id);
    res.send(livro);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivroAutor(req, res) {
  try {
    const autor = req.params.autor;
    const livro = getLivroPorAutor(autor);
    res.send(livro);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;
    insereLivro(livroNovo);
    res.status(201);
    res.send("Livro inserido com sucesso");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchLivro(req, res) {
  try {
    const livroModificado = req.body;
    const id = req.params.id;
    modificaLivro(livroModificado, id);
    res.send("Livro modificado com sucesso");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    excluirLivro(id);
    res.send("Livro deletado com sucesso");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
  getLivroAutor,
  postLivro,
  patchLivro,
  deleteLivro,
};
