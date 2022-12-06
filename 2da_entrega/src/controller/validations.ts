import { ProductsType, CartType } from "../utilities/globals";

class Files {
  constructor() {}
  validationBody(body: ProductsType) {
    if (
      !body.name ||
      !body.desc ||
      !body.code ||
      !body.image ||
      !body.price ||
      !body.stock ||
      typeof body.name !== "string" ||
      typeof body.desc !== "string" ||
      typeof body.code !== "number" ||
      typeof body.image !== "string" ||
      typeof body.price !== "number" ||
      typeof body.stock !== "number" 
    ) {
      return false;
    } else {
      return true;
    }
  }
}

const filesManager = new Files();

export default filesManager;