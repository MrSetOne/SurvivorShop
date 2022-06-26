import { useContext } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";
import { SearchOutlined} from "@ant-design/icons";
import './Search.scss'
import { Select } from 'antd';
const { Option } = Select;



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
      <div className="searchBar">
        <SearchOutlined />
        <input
          type="text"
          className="search-bar"
          onChange={(event) => handleSearch(event)}
        ></input>
      </div>
      <Select defaultValue="Order by Price" onChange={(e)=> handleByPrice(e)}>
        <Option value="disabled" disabled selected >
          Order by Price
        </Option>
        <Option value="asc">Lowest to highest</Option>
        <Option value="desc">Highest to lowest</Option>
      </Select>
    </div>
  );
};

export default Search;
