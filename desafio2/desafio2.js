
const fs = require("fs");
const productList = "products.json"; //NO me tira bien la direccion :/


const readArchive = () => {
    const data = fs.readFileSync(productList, 'utf-8');
    return JSON.parse(data);
}

const saveProduct = (products) => {
    const data = JSON.stringify(products, null, '/t');
    fs.writeFileSync(productList, data);

}

const getAll = () => {
    const allProducts = readArchive();
    return allProducts;
}

const getById = (searchId) => {
    const arrayMap = readArchive

    const index = arrayMap.findIndex((aProduct) => aProduct.id === id)
    if(index < 0) {
        throw new Error("product don't exist")
    }
    return arrayMap(index)
}

const save = (data) => {
    if (!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number') throw new Error('Invalid Data');

    const products = readArchive();

    const newProduct = {
        id: products[products.length -1].id + 1,
        title: data.title,
        price: data.price,
    }

    products.push(newProduct);
    saveProduct(products)
}


save (
    {
        title: "CASA",
        price: 7000
    }
)