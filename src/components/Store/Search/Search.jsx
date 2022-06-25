import { useContext } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";

const Search = () => {
const { searchBar, getAllProducts, showByPrice } = useContext(ProductContext);

  const handleSearch = (event) => {
    if(event.target.value.length === 0){
      getAllProducts();
    }else{
      let value = event.target.value.toLowerCase();
      searchBar(value)
    }
  };

const handleByPrice = (order) => {
    showByPrice(order)
  }

  return (
    <div className="title-and-searchbar">
      <h3>Search for a product:</h3>
      <input
        type="text"
        className="search-bar"
        onChange={(event) => handleSearch(event)}
      ></input>
      <button onClick={() => handleByPrice("desc")} className="search-by-price">
        Show by price (highest to lowest)
      </button>
      <button onClick={() => handleByPrice("asc")} className="search-by-price">
        Show by price (lowest to highest)
      </button>
    </div>
  );
};

export default Search;
