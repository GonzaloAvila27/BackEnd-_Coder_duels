const { Router } = require('express');
const { ProductsController } = require('../api/products');

const router = Router();

router.get('/',  async (req, res, next) => {
    res.json({
        msg: ProductsController.getAll()
    })
});

router.get('/:id', async (req, res, next) => {
try {
    const {id} = req.params.id;
    const product = await ProductsController.getById(id)
    res.json({
        msg: product
    })
} catch(err){
    next(err);
}
})

router.post('/', async (req, res, next) => {
    const { body } = req
try {
    const product = await ProductsController.save(body)
    res.json({
        msg: product
    })
} catch (err) {
    next(err);
}
});

router.put('/:id', async (req, res, next) => {
    const { body } = req

try {
    const {id} = req.params.id;
    const product = await ProductsController.findByIdAndUpdate(id, body)
    res.json({
        msg: product
    })
} catch (err) {
    next(err);
}
});


router.delete('/:id', async (req, res, next) => {
try {
    const {id} = req.params.id;
    const product = await ProductsController.findByIdAndDelete(id)
    res.json({
        msg: product
    })
} catch (err) {
    next(err);
}
});

module.exports = router;
