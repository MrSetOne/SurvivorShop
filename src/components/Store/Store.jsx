import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductsContext/ProductState";
import StoreItem from "./StoreItem/StoreItem";
import Search from "./Search/Search";

import "./Store.scss";

const Store = () => {
  const { allProducts, getAllProducts } = useContext(ProductContext);
  useEffect(() => {
    getAllProducts();
  }, []);

  let result;

  if (allProducts.length === 0) {
    result = <div className="spinner__test"></div>;
  } else {
    result = allProducts.map((product) => {
      return <StoreItem item={product} />;
    });
  }

  return (
    <main className="Store">
      <h1 className="title">Products</h1>
      <Search />
      <div className="products">{result}</div>
    </main>
  );
};

export default Store;
