const fs = require("fs");

function getTodosFavoritos() {
  return JSON.parse(fs.readFileSync("favoritos.json"));
}

function deletaFavoritoPorId(id) {
  const favoritos = getTodosFavoritos();
  const favorito = favoritos.find((favorito) => favorito.id === id);
  if (!favorito) {
    throw new Error("Favorito não encontrado");
  }
  const favoritosAtualizados = favoritos.filter(
    (favorito) => favorito.id !== id
  );
  fs.writeFileSync("favoritos.json", JSON.stringify(favoritosAtualizados));
}

function insereFavorito(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const favoritos = getTodosFavoritos();

  const livroInserido = livros.find((livro) => livro.id === id);
  const novaListaFavoritos = [...favoritos, livroInserido];

  fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos));
}

module.exports = {
  getTodosFavoritos,
  deletaFavoritoPorId,
  insereFavorito,
};
