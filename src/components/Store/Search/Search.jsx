import { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";
import { SearchOutlined} from "@ant-design/icons";
import './Search.scss'
import { Select } from 'antd';
import { CategoriesContext } from "../../../context/CategoriesContext/CategoriesState";
const { Option } = Select;

const Search = () => {
const { searchBar, getAllProducts, showByPrice, filterProducts } = useContext(ProductContext);
const {getAllCategories, allCategories} = useContext(CategoriesContext)

  useEffect(()=>{
    getAllCategories();
  },[])

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

  const handleByCategory = (category) =>{
    if(category === "getAll"){
      getAllProducts()
    } else{
      filterProducts(category)
    }
  }

  const categoriesOptions = allCategories.map(element=>{
    return (<Option value={element.id}>{element.name}</Option>)
  })

  return (
    <div className="searchAndFilter">
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
      <Select defaultValue="Categories" onChange={(e)=> handleByCategory(e)}>
        <Option disabled selected >Select a category</Option>
        <Option value="getAll" >Get all</Option>
        {categoriesOptions}
      </Select>
    </div>
  );
};

export default Search;
