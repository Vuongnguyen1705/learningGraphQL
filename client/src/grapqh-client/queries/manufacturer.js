import {gql} from '@apollo/client';

const getAllManufacturer = gql`
  query getAll {
    manufacturers {
      id
      name
    }
  }
`;

export {getAllManufacturer};
