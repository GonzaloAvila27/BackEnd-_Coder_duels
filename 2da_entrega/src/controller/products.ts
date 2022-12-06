
import {ProductsType} from '../utilities/globals'
import { ProductsModel } from "../models/products-model";


class Products {
  constructor() {}

  async getProductoById(id: string) {
    try {
      return await ProductsModel.findById(id);
    } catch (error) {
      console.log(error);
    }
  }
  async saveProduct(data: ProductsType) {
    try {
      const newProduct: ProductsType = {
        name: data.name,
        desc: data.desc,
        code: data.code,
        image: data.image,
        price: data.price,
        stock: data.stock
      };
      await ProductsModel.create(newProduct);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteProduct(id: string) {
    try {
      await ProductsModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
  async upgradeProduct(id: string, data: ProductsType) {
    const { name, desc, code, image, price, stock } = data;
    try {
      await ProductsModel.findByIdAndUpdate(
        id,
        { name, desc, code, image, price, stock  },
        { new: true }
      );
    } catch (error) {
      console.log(error);
    }
  }
}

const productManager = new Products();

export default productManager;