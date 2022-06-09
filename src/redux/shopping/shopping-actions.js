import * as actionTypes from "./shopping-types";

export const fetchProducts = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS,
    payload: products,
  };
};

export const fetchfilteredProducts = (filteredProducts) => {
  return {
    type: actionTypes.FETCH_FILTERED_PRODUCTS,
    payload: filteredProducts,
  };
};

// CART OVERLAY SECTION
export const toggleCartOverlay = () => {
  return {
    type: actionTypes.TOGGLE_CART_OVERLAY,
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

///////////////////////////////////////////////////////////////////////////////

export const closeCartOverlay = () => {
  return {
    type: actionTypes.CLOSE_CART_OVERLAY,
  };
};
// END OF CART OVERLAY SECTION

export const fetchProductsFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

//ACTION CREATOR TO PERFORM ASYC API CALLS. THIS FUNCTION IS IMPURE, AND WE CAN ALSO DISPATCH ACTIONS
// export const fetchProducts = () => {
//   return (dispatch) => {
//     dispatch(fetchProductsRequest);
//     axios
//       .get("http://localhost:4000")

//       //CHECK HERE - THIS IS WHAT IS CAUSING ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! URL ENDPOINT
//       .then((res) => {
//         const products = res.data;

//         dispatch(fetchProductsSuccess(products));
//       })
//       .catch((error) => {
//         const errorMsg = error.message;

//         dispatch(fetchProductsFailure(errorMsg));
//       });
//   };
// };
