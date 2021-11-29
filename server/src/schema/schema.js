import {gql} from 'apollo-server-express';

const typeDefs = gql`
  type Manufacturer {
    id: ID!
    name: String
    products: [Product]
  }
  type Product {
    id: ID
    name: String
    price: Int
    manufacturer: Manufacturer
  }

  # RootType
  type Query {
    products: [Product] #lấy danh sách product
    product(id: ID!): Product # lấy product theo id
    manufacturers: [Manufacturer]
    manufacturer(id: ID!): Manufacturer
  }
  type Mutation {
    createProduct(name: String, price: Int, manufacturerId: ID!): Product
    updateProduct(id: ID!, data: ProductInput): Product
    deleteProduct(id: ID!): Product
    createManufacturer(name: String): Manufacturer
    updateManufacturer(id: ID!, data: ManufacturerInput): Manufacturer
    deleteManufacturer(id: ID!): Manufacturer
  }

  input ProductInput {
    name: String
    price: Int
    manufacturerId: Int
  }
  input ManufacturerInput {
    name: String
  }
`;

export default typeDefs;
