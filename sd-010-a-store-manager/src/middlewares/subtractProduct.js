const subtractProductQuantity = require('../helpers/subtractProductQuantity');
const ProductModel = require('../models/productsModel');

module.exports = async (req, res, next) => {
  const sales = req.body.map(({ productId, quantity }) => ({
    productId,
    quantity,
  }));

  // const product = await sales.map(({ productId }) => ProductModel.findById(productId));
  // console.log(product);

  const ted = await sales.map((item) => {
    subtractProductQuantity(item);
  });

  console.log(ted);

  // if (!updated) {
  //   return next({
  //     error: {
  //       code: 'not_found',
  //       message: 'Product not found',
  //     },
  //   });
  // }
  next();
}; 