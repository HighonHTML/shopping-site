import {
  useEffect,
  createContext,
  useContext,
  useReducer,
  useCallback,
  act,
} from "react";

const ProductContext = createContext();

const initialState = {
  searchQuery: "",
  products: [],
  currentProduct: {},
  errorLoadingProducts: "",
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "products/load":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case "currentProduct/load":
      return {
        ...state,
        currentProduct: action.payload,
        isLoading: false,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "setSearchQuery":
      return {
        ...state,
        searchQuery: action.payload,
      };
  }
};

function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    products,
    currentProduct,
    errorLoadingProducts,
    isLoading,
    searchQuery,
  } = state;

  useEffect(() => {
    async function getProducts() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        dispatch({ type: "products/load", payload: data });
      } catch (err) {
        dispatch({ type: "error", payload: "failed to load products" });
      }
    }
    getProducts();
  }, []);

  const getCurrentProduct = useCallback(
    async function getCurrentProduct(id) {
      if (currentProduct.id === Number(id)) {
        return;
      }
      try {
        dispatch({ type: "loading" });
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        dispatch({ type: "currentProduct/load", payload: data });
      } catch (err) {
        dispatch({ type: "error", payload: "failed to load product" });
      }
    },
    [currentProduct.id]
  );

  function setSearchQuery(value) {
    dispatch({ type: "setSearchQuery", payload: value });
  }

  return (
    <ProductContext.Provider
      value={{
        isLoading,
        products,
        getCurrentProduct,
        currentProduct,
        setSearchQuery,
        searchQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductContext);
  if (!context) throw new Error("outside scope");
  return context;
}

export { useProducts, ProductProvider };
