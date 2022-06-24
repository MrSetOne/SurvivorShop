import { useContext } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";

const Search = () => {
const { searchBar, getAllProducts } = useContext(ProductContext);

  const handleSearch = (event) => {
    if(event.target.value.length === 0){
      getAllProducts();
    }else{
      let value = event.target.value.toLowerCase();
      searchBar(value)
    }
  };

  return (
    <div className="title-and-searchbar">
      <h3>Search for a product:</h3>
      <input
        type="text"
        className="search-bar"
        onChange={(event) => handleSearch(event)}
      ></input>
      {/* <button onClick={() => searchBar()} className="search-button">
        Submit
      </button> */}
    </div>
  );
};

export default Search;
