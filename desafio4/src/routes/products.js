const { Router } = require('express');
const { ProductsController } = require('../api/products');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: ProductsController.getAll()
    })
});

router.get('/:id', (req, res) => {
 const {id} = req.params.id;
    
    const product = ProductsController.getById(id)
    res.json({
        msg: product
    })
})

router.post('/', (req, res) => {
    res.json({
        msg: `post a product`
    })
});

router.put('/:id', (req, res) => {
    res.json({
        msg: `put a product`
    })
});


router.delete('/:id', (req, res) => {
    res.json({
        msg: `delete by id`
    })
});




module.exports = router;
