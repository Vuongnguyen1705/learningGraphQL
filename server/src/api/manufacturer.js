import Manufacturer from '../models/Manufacturer.js';

const manufacturerMethod = {
  getAll: async () => await Manufacturer.find(),
  getById: async (id) => await Manufacturer.findById(id),
  create: async (args) => {
    const newManufacturer = new Manufacturer(args);
    return await newManufacturer.save();
  },
  delete: async (id) => await Manufacturer.findByIdAndDelete(id),
  update: async (id, data) => await Manufacturer.findByIdAndUpdate(id, data),
};

export default manufacturerMethod;
