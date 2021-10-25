const { Router } = require('express');

const router = Router();

const SalesController = require('../controllers/SalesController');

const salesValidate = require('../middlewares/salesValidate');
const subtractProduct = require('../middlewares/subtractProduct');
// const quantityProductValidate = require('../middlewares/quantityProductValidate');

router.post('/', salesValidate, subtractProduct, SalesController.create);
router.get('/', SalesController.getAllSales);
router.get('/:id', SalesController.findById);
router.put('/:id', salesValidate, SalesController.updateOne);
router.delete('/:id', SalesController.eliminate);

module.exports = router;