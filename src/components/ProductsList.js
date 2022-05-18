import React, { Component } from "react";
import Product from "./Product";

// Query
import gql from "graphql-tag";
import { Query } from "react-apollo";

// oUR QUERY
const GET_PRODUCTS = gql`
  query {
    categories {
      products {
        id
        name
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

class ProductsList extends Component {
  render() {
    return (
      <div>
        <h1>My products</h1>
        <Query query={GET_PRODUCTS}>
          {({ loading, error, data }) => {
            if (loading) return <h2>Loading...</h2>;
            if (error) return <div>error...</div>;

            // console.log(data);

            return <Product data={data} />;
          }}
        </Query>
      </div>
    );
  }
}

export default ProductsList;
