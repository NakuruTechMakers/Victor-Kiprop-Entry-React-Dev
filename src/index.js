import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Adding store
import { Provider } from "react-redux";
import store from "./redux/store";

// Graphql
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

// Create Apollo Client
export const apolloClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

// const Root = () => (
//     <ApolloProvider client={apolloClient}>
//       <Provider store={store}>
//       <App />
//       </Provider>
//     </ApolloProvider>
// );
// ReactDOM.render(<Root />, document.getElementById('root'))
// if (module.hot) {
//   module.hot.accept()
// }
