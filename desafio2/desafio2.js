
const fs = require("fs");
const path = require("path");
const productList = "products.json"; //NO me tira bien la direccion :/


class Container {
    constructor(productList) {
        if(!fs.existsSync(productList)) {
            const dataInit = [];
            saveProduct(dataInit);
        }
        fs.writeFileSync(productList, JSON.stringify([]));
    }


        readArchive = () => {
            const data = fs.readFileSync(productList, 'utf-8');
            return JSON.parse(data);
        }

        saveProduct = async (products) => {
            const data = JSON.stringify(products, null, '/t');
        await  fs.writeFileSync(productList, data);

        }

        getAll = async () => {
            const allProducts = await readArchive();
            return allProducts;
        }

        getById =  async (searchId) => {
            const products = await readArchive();

            const index = products.findIndex((aProduct) => aProduct.id === searchId)
            if(index < 0) {
                throw new Error("product don't exist")
            }
            return arrayMap(index);
        }

        save = async (data) => {
            if (!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number') throw new Error('Invalid Data');

            const products = await readArchive();

            const newProduct = {
                id: products.length === 0 ? 1 : products[products.length -1].id + 1,
                title: data.title,
                price: data.price,
            }

            products.push(newProduct);
            await saveProduct(products);
        }

        DelAll = async () => {
        await saveProduct([]);
        }

        DelById = async (searchId) => {
            const products = await readArchive();
            const index = products.findIndex((aProduct) => aProduct.id === searchId);
            if(index < 0) {
                return;
            }

            products.splice(index, 1);
            await saveProduct(products);
}

}



save (
    {
        title: "CASA",
        price: 7000
    }
)