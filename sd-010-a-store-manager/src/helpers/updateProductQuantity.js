const SalesModel = require('../models/salesModel');
const ProductModel = require('../models/productsModel');

module.exports = async (id, newSale) => {
  const { quantity: newQuantity, productId } = newSale;
  const sale = await SalesModel.findById(id);

  if (!sale) return;
  const { itensSold: { quantity } } = sale;

  const { quantity: productQuantity, name } = await ProductModel.findById(productId);

  const result = Math.abs(newQuantity - quantity);
  let updatedQuantity;
  
  if (newQuantity > quantity) {
    updatedQuantity = productQuantity - result;
  }
  
  if (newQuantity < quantity) {
    updatedQuantity = productQuantity + result;
  }
    
  const newValues = { quantity: updatedQuantity || productQuantity, name };

  await ProductModel.updateOne(productId, newValues);
};