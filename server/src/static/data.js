const manufacturerData = [
  {
    id: 1,
    name: 'iPhone',
    productId: [1],
  },
  {
    id: 2,
    name: 'Xiaomi',
    productId: [2],
  },
  {
    id: 3,
    name: 'Samsung',
    productId: [3, 4],
  },
];
const productData = [
  {
    id: 1,
    name: 'iPhone 13 ProMax',
    price: 30000000,
    manufacturerId: 1,
  },
  {id: 2, name: 'Mi 11T Pro', price: 14990000, manufacturerId: 2},
  {
    id: 3,
    name: 'Samsung galaxy ZFold 3',
    price: 50000000,
    manufacturerId: 3,
  },
  {
    id: 4,
    name: 'Samsung galaxy ZFlip 3',
    price: 50000000,
    manufacturerId: 3,
  },
];

export {manufacturerData, productData};
