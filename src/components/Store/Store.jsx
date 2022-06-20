import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalState"
import StoreItem from "./StoreItem/StoreItem"
import './Store.scss'


const Store = () => {
    const {allProducts, getAllProducts} = useContext(GlobalContext)
    useEffect(()=>{
        getAllProducts();
    },[])

    let result

    if(allProducts.length === 0){
        result = (<div class="spinner__test"></div>)
    } else{
        result = allProducts.map(product => {return(<StoreItem item={product}/>)})
    }
    

    return (
        <main className="Store">
            <h1>Soy la vista de tienda</h1>
            {result}
        </main>
  )
}

export default Store