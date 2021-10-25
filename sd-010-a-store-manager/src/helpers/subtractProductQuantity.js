const ProductModel = require('../models/productsModel');

module.exports = async (sale) => {
    const { quantity, productId } = sale;
    const product = await ProductModel.findById(productId);

    if (!product) return 'nao encontrado';

    const { name, quantity: quant } = product;

    const newQuantity = quant - quantity;
  
    const updateProduct = {
      name,
      quantity: newQuantity,
    };
  
    await ProductModel.updateOne(productId, updateProduct);
    return 'porra';
  };
