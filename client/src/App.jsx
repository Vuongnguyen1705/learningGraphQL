import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import ManufacturerForm from './components/ManufacturerForm';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div class="container mx-auto">
        <h1 class="text-center mb-3 font-bold py-5"> Sản phẩm</h1>
        <hr className="mb-5" />
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <ProductForm />
          </div>
          <div className="grid-cols-4">
            <ManufacturerForm />
          </div>
        </div>
        <hr className="mb-5" />
        <ProductList />
      </div>
    </ApolloProvider>
  );
}

export default App;
