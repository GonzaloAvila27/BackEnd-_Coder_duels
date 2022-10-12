const http = require('http');
const Container = require("../../desafio2/desafio2");
const app = express();
const PORT = 8080;


const server = app.listen(PORT, () => {
    console.log(`server HTTP hearing port ${sever.address().port}`);
});

server.on("error", (error) => console.log(`Error ${error}`));

app.get("/", (req, res) => {
    res.send(
          '<h1 style="color: green"> - Welcome to Express - </h1>'
    );
});


app.get("/productos", (req, res) => {
    const show = async () => {
          const productArray = await productos.getAll();
          let template = ``;
          productArray.map(
                (item) =>
                      (template += `<h1 style="color: blue">${item.title} </h1>\n <h2 >price $<span style="color: red">${item.price}</span></h2>">`)
          );
          res.send(template);
    };
    show();
});
pp.get("/productoRandom", (req, res) => {
    const random = async () => {
          const productArray = await productos.getAll();
          let numero = Math.floor(
                Math.random() * (productArray.length - 1 + 1)
          );
          let productRandom = [];
          const products = productArray.map(
                (item, index) => index === numero && productRandom.push(item)
          );
          let template = `<h1 style="color: blue">${productRandom[0].title} </h1>\n <h2 >Price $<span style="color: red">${productRandom[0].price}</span></h2>">`;
          res.send(template);
    };
    random();
});