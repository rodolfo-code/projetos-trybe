const SalesModel = require('../models/salesModel');

// const subtractProductQuantity = require('../helpers/subtractProductQuantity');
const addProductQuantity = require('../helpers/addProductQuantity');
// const updateProductQuantity = require('../helpers/updateProductQuantity');

const create = async (itensSold) => {
  // await itensSold.map((item) => subtractProductQuantity(item));
        
  const newSale = await SalesModel.create(itensSold);

  return { newSale }; 
};

const getAllSales = async () => {
  const sales = await SalesModel.getAllSales();

  if (!sales) {
    return {
      error: {
        code: 'not_found',
        message: 'Sale not found',
      },
    };
  }

  return { sales };
};

const findById = async (id) => {
  const sale = await SalesModel.findById(id);

  if (!sale) {
    return {
      error: {
        code: 'not_found',
        HTTPCode: 404,
        message: 'Sale not found',
      },
    };
  }

  return { sale };
};

const updateOne = async (id, itensSold) => {
  // await itensSold.map((item) => updateProductQuantity(id, item));

  const updated = await SalesModel.updateOne(id, itensSold);

  return updated;
};

const eliminate = async (id) => {
  await addProductQuantity(id);

  const eliminated = await SalesModel.eliminate(id);

  if (!eliminated) {
    return {
      error: {
        code: 'invalid_data',
        message: 'Wrong sale ID format',
      },
    };
  }

  return { eliminated };
};

module.exports = {
  create,
  getAllSales,
  findById,
  updateOne,
  eliminate,
};