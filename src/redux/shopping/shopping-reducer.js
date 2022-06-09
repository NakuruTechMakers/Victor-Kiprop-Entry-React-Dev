import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  data: {},
  cart: [], //main img, small images,id,title,name,size,color,price,desc,img,qty
  currentItem: null,
  cartOverlayOpen: false,
  error: "",
  // loading: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };

    case actionTypes.ADD_TO_CART:
      // get items data from the products array
      const item = state.data.categories?.map((item, index) =>
        item.products.find((product) => product.id === action.payload.id)
      );
      // check if item is in the cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    ////////////////////////////////////////////////////////////////////////////
    // CART OVERLAY SECTION
    case actionTypes.TOGGLE_CART_OVERLAY:
      return {
        ...state,
        cartOverlayOpen: !state.cartOverlayOpen,
      };
    case actionTypes.CLOSE_CART_OVERLAY:
      return {
        ...state,
        cartOverlayOpen: false,
      };
    default:
      return state;
  }
};

export default shopReducer;
