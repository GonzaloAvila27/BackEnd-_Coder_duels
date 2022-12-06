import { Router, Request, Response, NextFunction } from "express";
import cartManager from "../controller/cart";

const cartRouter = Router();

cartRouter.post("/",async (req: Request, res: Response, next: NextFunction) => {
        try {
            const idCart = await cartManager.createCart();
            res.json({
                msg: `New cart id: ${idCart}`,
            });
        } catch (error) {
            next(error);
        }
    }
);
cartRouter.delete("/:id",async (req: Request, res: Response, next: NextFunction) => {
        try {
            const idParams: string = req.params.id;

            await cartManager.deleteCart(idParams);

            res.json({
                msg: ` cart id: ${idParams} deleted`,
            });
        } catch (error) {
            next(error);
        }
    }
);
cartRouter.get("/:id/products",async (req: Request, res: Response, next: NextFunction) => {
        try {
            const idParams = req.params.id;
            const dataJson = await cartManager.productsByCartId(idParams);

            res.json({
                dataJson,
            });
        } catch (error) {
            next(error);
        }
    }
);
cartRouter.post("/:id/products",async (req: Request, res: Response, next: NextFunction) => {
        try {
            const idParams = req.params.id;
            const { id } = req.body;
            await cartManager.addProductToCart(idParams, id);

            res.json({
                msg: `Product id: ${id} successfully added to cart id: ${idParams}`,
            });
        } catch (error) {
            next(error);
        }
    }
);
cartRouter.delete("/:id/products/:id_prod", async (req: Request, res: Response, next: NextFunction) => {
        try {
            const idCart = req.params.id;
            const idProduct = req.params.id_prod;

            await cartManager.deleteProductToCart(idCart, idProduct);

            res.json({
                msg: `Product deleted from cart ${idCart}`,
            });
        } catch (error) {
            next(error);
        }
    }
);

export default cartRouter;