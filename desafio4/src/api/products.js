const { v4: uuidv4 } = require('uuid');

class ProductsAPI {
    constructor() {
        this.products = [
            { id: uuidv4(), title: "X", price: 1, tumbnail: "Z" }
        ]
    }

    exists(id) {
        const index = this.products.find(aProduct => aProduct.id == id)
        return index < 0;
    }

    getAll() {
        return this.products;
    }

    getById(){
        return ' get products by id';
    }
    save(){
        return ' save a product';
    }
    findByIdAndUpdate(){
        return ' get by id and update a product';
    }
    findByIdAndDelete(){
        return ' get by id and delete a product';
    }
}

const ProductsApiInstance = new ProductsAPI();

module.exports = {
    ProductsController : ProductsApiInstance
}