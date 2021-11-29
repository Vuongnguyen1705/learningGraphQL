import {gql} from '@apollo/client';

const getAllProduct = gql`
  query getAll {
    products {
      id
      name
      price
    }
  }
`;
const getProduct = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      id
      name
      price
      manufacturer {
        id
        name
        products {
          id
          name
          price
        }
      }
    }
  }
`;
export {getAllProduct, getProduct};
