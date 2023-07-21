import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartIem";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/">Ver mas productos</Link>
            </>)
    }
    return (
        <div>
            
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <div className="container text-center card ">
            <h3 className="card-title"> Total $: {total} </h3>
            <h3 className="card-title"> Cantidad total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()} > Vaciar carrito </button>
            <Link to="/checkout"> Finalizar compra!</Link>
            </div>
        </div>
    )
}

export default Cart