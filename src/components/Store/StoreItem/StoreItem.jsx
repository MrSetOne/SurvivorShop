const StoreIrem = ({item}) => {
  return (
    <article className="StoreIrem" key={item.id}>
        <h3>{item.name}</h3>
        <img src={`http://localhost:8080/${item.img}`} alt={item.name} width="200px" />
    </article>
  )
}

export default StoreIrem