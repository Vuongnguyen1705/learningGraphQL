import {gql} from '@apollo/client';

const addManufacturer = gql`
  mutation addManufacturer($name: String) {
    createManufacturer(name: $name) {
      id
      name
    }
  }
`;

export {addManufacturer};
