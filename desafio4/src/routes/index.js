const { Router } = require('express');
const ProductRouter = require(`./products`)
const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: `ok router :D`
    })
});

router.use(`/products`, ProductRouter)

module.exports = router;
