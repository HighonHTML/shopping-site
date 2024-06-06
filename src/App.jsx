import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import { ProductProvider } from "./context/ProductContext";
import { CartDetailsProvider } from "./context/CartDetailsContext";

import { BarLoader } from "react-spinners";
import Product from "./pages/product/Product";

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const Cart = lazy(() => import("./pages/cart/Cart"));

function App() {
  const routes = [
    {
      path: "/",
      element: (
        <Suspense fallback={<BarLoader width={500} />}>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: "shop",
      element: (
        <Suspense fallback={<BarLoader width={500} />}>
          <Shop />
        </Suspense>
      ),
    },
    {
      path: "shop/:id",
      element: <Product />,
    },
    {
      path: "cart",
      element: (
        <Suspense fallback={<BarLoader width={500} />}>
          <Cart />
        </Suspense>
      ),
    },
  ];
  const router = createBrowserRouter(routes);
  return (
    <CartDetailsProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </CartDetailsProvider>
  );
}

export default App;
