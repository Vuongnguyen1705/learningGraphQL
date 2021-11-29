const resolver = {
  //query
  Query: {
    products: async (parent, args, {mongoDataMethod: {productMethod}}) =>
      await productMethod.getAll(),
    product: async (parent, {id}, {mongoDataMethod: {productMethod}}) =>
      await productMethod.getById(id),
    manufacturers: async (parent, args, {mongoDataMethod: {manufacturerMethod}}) =>
      await manufacturerMethod.getAll(),
    manufacturer: async (parent, {id}, {mongoDataMethod: {manufacturerMethod}}) =>
      await manufacturerMethod.getById(id),
  },
  Manufacturer: {
    products: async ({id}, args, {mongoDataMethod: {productMethod}}) =>
      await productMethod.getAll({manufacturerId: id}),
  },
  Product: {
    manufacturer: async ({manufacturerId}, args, {mongoDataMethod: {manufacturerMethod}}) =>
      await manufacturerMethod.getById(manufacturerId),
  },
  //mutation
  Mutation: {
    createProduct: async (parent, args, {mongoDataMethod: {productMethod}}) =>
      await productMethod.create(args),
    updateProduct: async (parent, {id, data}, {mongoDataMethod: {productMethod}}) =>
      await productMethod.update(id, data),
    deleteProduct: async (parent, {id}, {mongoDataMethod: {productMethod}}) =>
      await productMethod.delete(id),
    createManufacturer: async (parent, args, {mongoDataMethod: {manufacturerMethod}}) =>
      await manufacturerMethod.create(args),
    updateManufacturer: async (parent, {id, data}, {mongoDataMethod: {manufacturerMethod}}) =>
      await manufacturerMethod.update(id, data),
    deleteManufacturer: async (parent, {id}, {mongoDataMethod: {manufacturerMethod}}) =>
      await manufacturerMethod.delete(id),
  },
};

export default resolver;
