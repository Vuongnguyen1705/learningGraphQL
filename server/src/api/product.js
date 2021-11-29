import Product from '../models/Product.js';

const productMethod = {
  getAll: async (condition = null) =>
    condition === null ? await Product.find() : await Product.find(condition),
  getById: async (id) => await Product.findById(id),
  create: async (args) => {
    const newProduct = new Product(args);
    return await newProduct.save();
  },
  delete: async (id) => await Product.findByIdAndDelete(id),
  update: async (id, data) => await Product.findByIdAndUpdate(id, data),
};

export default productMethod;
