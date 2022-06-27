const OrdersItems = (element) => {
    console.log(element.element)

    let totalPrice = 0
    let totalProducts = 0

    element.element.Products.forEach(item => totalPrice += item.price * item.ProductOrders.amount)

    element.element.Products.forEach(item =>totalProducts += item.ProductOrders.amount)

    return (
    <div className="OrdersItem" key={element.element.id} style={element.element.paid?{backgroundColor:"green"}:{backgroundColor:"red"}}>
        <h2>{element.element.createdAt.substring(0,10)}</h2>
        <h3>{totalPrice.toFixed(2)} ₸</h3>
        <h4>{totalProducts} products</h4>
        {element.element.paid?<h5>Paid</h5>:<h5>Unpaid</h5>}

    </div>
  )
}

export default OrdersItems