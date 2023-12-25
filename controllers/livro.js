function getLivros(req, res) {
  try {
    res.send("Listagem de livros");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
};
