const { v4: uuidv4 } = require('uuid');


class ProductsAPI {
    constructor() {
        this.products = [
            { id: uuidv4(), title: "X", price: 1, tumbnail: "Z" }
        ]
    }

    exists(id) {
        const index = this.products.findIndex(aProduct => aProduct.id == id)
        return index < 0;
    }

    getAll() {
        return this.products;
    }

    getById(){
        const exist = this.exists(id);

        if(!exist) throw new Error(`nowhere to be find`)

        return ' get products by id';
    }
    save(data){
        if (!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number') throw new Error('Invalid Data');

        const newProduct = {
            title: data.title,
            price: data.price,
            tumbnail: data.tumbnail,
            id: uuidv4()
        }

        this.products.push(newProduct);
        return newProduct;
    }
    findByIdAndUpdate(id, newData){
        const exist = this.exists(id);

        if(!exist) throw new Error(`nowhere to be find`);
        if (!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number') throw new Error('Invalid Data');

        const index = this.products.findIndex(aProduct => aProduct.id == id);
        const oldProduct = this.products[index];

        const newProduct = {
            title: data.title,
            price: data.price,
            tumbnail: data.tumbnail,
            id: oldProduct.id
        }
        this.products.splice(index, 1, newProduct);
        return newProduct;
    }

    findByIdAndDelete(id){
        const exist = this.exists(id);
        if(!exist) throw new Error(`nowhere to be find`)
        const index = this.products.findIndex(aProduct => aProduct.id == id);
        this.products.splice(index, 1);
    }
}

const ProductsApiInstance = new ProductsAPI();

module.exports = {
    ProductsController : ProductsApiInstance
}