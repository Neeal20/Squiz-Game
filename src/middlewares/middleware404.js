const middleware404 = (req, res) => {
  // Middleware 404 pour nos routes
  res.status(404).render("404");
};

module.exports = middleware404;
