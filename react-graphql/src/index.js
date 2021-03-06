import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { createPersistedQueryLink } from 'apollo-link-persisted-queries';

import App from './components/App';
import './index.css';

const client = new ApolloClient({
  link: createPersistedQueryLink({ useGETForHashedQueries: true }).concat(
    createHttpLink({ uri: 'http://localhost:5000/graphql' })
  ),
  cache: new InMemoryCache(),
});

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<AppWithProvider />, document.getElementById('root'));
registerServiceWorker();
