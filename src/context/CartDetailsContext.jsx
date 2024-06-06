import { createContext, useContext, useEffect, useReducer } from "react";

const CartDetailsContext = createContext();
const storageValue = localStorage.getItem("products");

// initial value should be a value and not a function

const initialState = {
  products: storageValue ? JSON.parse(storageValue) : {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add/cart":
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.id]: action.payload.product,
        },
      };
    // case "remove/cart":
    //   return {
    //     ...state,
    //     products: {
    //       [action.payload.id]: action.payload.product,
    //       ...state.products,
    //     },
    //   };
    case "remove/cart":
      const { [action.payload.id]: removedProduct, ...restProducts } =
        state.products;
      return {
        ...state,
        products: restProducts,
      };
    default:
      return state;
  }
};

function CartDetailsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = state;

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function addToCart(product, id) {
    if (product.quantity > 0) {
      dispatch({ type: "add/cart", payload: { product, id } });
    } else {
      dispatch({ type: "remove/cart", payload: { product, id } });
    }
  }

  function getCurrentProductQuantity(id) {
    if (id in products) {
      return products[id].quantity;
    }
    return 1;
  }

  return (
    <CartDetailsContext.Provider
      value={{ addToCart, products, getCurrentProductQuantity }}
    >
      {children}
    </CartDetailsContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartDetailsContext);
  return context;
}

export { CartDetailsProvider, useCart };
