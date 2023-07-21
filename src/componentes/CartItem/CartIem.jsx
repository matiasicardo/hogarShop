import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartIem = ({ item, cantidad, img }) => {
    const { eliminarProducto } = useContext(CarritoContext)

    return (
        <div>
            <div className="container text-center card ">
                <h4 className="card-title"> {item.nombre} </h4>
                <h5 className="card-text"> Cantidad: {cantidad} </h5>
                <h5 className="card-text"> Precio: {item.precio} </h5>
                <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>


            </div>
            <hr />
        </div>
    )
}

export default CartIem