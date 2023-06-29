import Item from "../Item/Item"

const ItemList = ({ productos }) => {
  return (
    <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
            {productos.map((prod) => (
                <div className="col-md-3 m-1">
                    <Item key={prod.id} {...prod}/>
                </div>
            ))}
      </div>
    </div>
  )
}

export default ItemList