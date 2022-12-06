import { CartsModel } from "../models/cart-model";
import { ProductsModel } from "../models/products-model";
import { CartType } from "../utilities/globals";

class Cart {
  constructor() {}

  async createCart() {
    try {
      const newCart: CartType = {
        timestap: new Date().toLocaleString(),
        products: [],
      };
      const cart = await CartsModel.create(newCart);
      return cart?._id.toString()
    } catch (error) {
      console.log(error);
    }
  }
  async deleteCart(id: string) {
    try {
      await CartsModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
  async productsByCartId(id: string) {
    try {
      const cart = await CartsModel.findById(id);
      const products = await cart?.populate("productsID");
      return products?.productsID;
    } catch (error) {
      console.log(error);
    }
  }
  async addProductToCart(idCart: string, idProduct: string) {
    try {
      const cart = await CartsModel.findById(idCart);
      const product = await ProductsModel.findById(idProduct);
      if (product === null || cart === null) {
        throw new Error("Neither cart nor product exist");
      } else {
        cart.productsID.push(product._id);
      }
      await CartsModel.create(cart);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteProductToCart(idCart: string, idProduct: string) {
    try {
      const cart = await CartsModel.findById(idCart);
      if (cart === null) {
        throw new Error("cart DO NOT exist");
      } else {
        const index = cart.productsID.findIndex(
          (id) => id.toString() === idProduct
        );
        if(index < 0){
          throw new Error('Nope, not here')
        }
        cart.productsID.splice(index, 1);
        await CartsModel.create(cart); 
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const cartManager = new Cart();

export default cartManager;