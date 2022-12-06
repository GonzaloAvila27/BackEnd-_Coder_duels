//import { Router } from "express";
//import productsRouter from "./product";
//import cartRouter from "./cart";

//const mainRouter:Router = Router()

//mainRouter.use('/products', productsRouter)
//mainRouter.use('/cart', cartRouter)


//export default mainRouter

import { Router, Request, Response, NextFunction } from "express";
import { auth } from "../config";
import filesManager from "../controller/validations";
import productManager from "../controller/products";
import { ProductsModel } from "../models/products-model";

//Hacer todas las comprobaciones correspondientes
const productsRouter = Router()

productsRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
       const products = await ProductsModel.find()
       res.json({
        products
       })
    } catch (error) {
        next(error)
    }
})
productsRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const idParams: string = req.params.id
        const dataJson = await productManager.getProductoById(idParams)
        res.json({
            dataJson
        })
    } catch (error) {
        next(error)
    }
})
productsRouter.post('/', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req
        if (!filesManager.validationBody(body)) {
            res.status(401).json({
                msg: 'NOPE, invalid data'
            })
        } else {
            await productManager.saveProduct(body)
            res.json({
                msg: 'product added Ok'
            })
        }
    } catch (error) {
        next(error)
    }
})
productsRouter.put('/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const idParams: string = req.params.id
        const { body } = req
        if (!filesManager.validationBody(body)) {
            res.status(401).json({
                msg: 'NOPE, invalid data'
            })
        } else {
            await productManager.upgradeProduct(idParams, body)
            res.json({
                msg: ` product id ${idParams} modified`
            })
        }
    } catch (error) {
        next(error)
    }
})
productsRouter.delete('/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const idParams: string = req.params.id
        await productManager.deleteProduct(idParams)
        res.json({
            msg: `Product deleted successfully id: ${idParams} `
        })
    } catch (error) {
        next(error)
    }
})

export default productsRouter