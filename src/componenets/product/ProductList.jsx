import { useProducts } from "../../context/ProductContext";
import ProductItem from "./ProductItem";
import Spinner from "../spinner/Spinner";

function ProductList() {
  const { products, isLoading, searchQuery } = useProducts();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`flex flex-wrap justify-between px-[10%] py-[2%] gap-[2.5%] bg-neutral-200`}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        filteredProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))
      )}
    </div>
  );
}

export default ProductList;
