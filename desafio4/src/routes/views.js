const { Router } = require('express');
const ProductApp = require('../api/products');

const views = Router();

views.get("/", (req, res) => {
  res.render("./layout");
});

views.get("/productos", (req, res) => {
  const products = ProductApp.getAll();
  res.render("./pages/products.pug", { products: products });
});

views.get("/formulario", (req, res) => {
  res.render("./pages/form.pug", { title: "Forms" });
});

export default views;
