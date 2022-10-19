const { Router } = require('express');
const { ProductsController } = require('../api/products');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: ProductsController.getAll()
    })
});

router.get('/:id', (req, res) => {
   try{ const {id} = req.params.id;
    
    const product = ProductsController.getById(id)
    res.json({
        msg: product
    })
    } catch(err) {
        const status = err.status || 500;
        const message = err.message || `internal server error`;

        res.status(status).json({
            message,
            stack: err.stack, 
        })
    }
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
