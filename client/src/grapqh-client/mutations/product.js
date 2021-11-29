import {gql} from '@apollo/client';

const addProduct = gql`
  mutation addProduct($name: String, $price: Int, $manufacturerId: ID!) {
    createProduct(name: $name, price: $price, manufacturerId: $manufacturerId) {
      id
      name
      price
    }
  }
`;

export {addProduct};
