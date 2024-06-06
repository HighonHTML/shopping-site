import PageNav from "../../componenets/pageNav/PageNav";
import ProductList from "../../componenets/product/ProductList";
import styles from './Shop.module.css'
function Shop() {
  return (
    <div className="min-h-full flex flex-col">
      <PageNav />
      <ProductList />
    </div>
  );
}

export default Shop;
