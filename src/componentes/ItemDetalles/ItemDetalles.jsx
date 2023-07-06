import { useState } from "react"
import { Link } from "react-router-dom"
import Contador from "../Contador/Contador"

const ItemDetalles = ({ id, nombre, precio, img, desc, stock }) => {
    const [agregarCantidad, SetAgregarCantidad] = useState(0);
    
    const manejadorCantidad = (cantidad) => {
        SetAgregarCantidad(cantidad); 
        console.log("Productos agregados: " + cantidad)
    }


    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6 order-md-1">
                        <img className="h-1 d-inline-block" src={img} alt={nombre} />
                    </div>
                    <div className="order-md-2 col-md-6 lead">
                        <div className="card mb-5">
                        <h3 className="card-title">Modelo: {nombre}</h3>
                        <p className="card-text">  Descripcion: {desc} </p>
                        <p className="card-text"> Precio: $ {precio} </p>
                        </div>
                    <div className="container card text-center">
                    {
                        agregarCantidad > 0 ? (<Link to="/cart"> Comprar ahora</Link>) : 
                        (<Contador inicial ={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                    }
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
/*                    <div className="d-grid gap-3 col-10 mx-auto">
                        <button className="btn btn-primary" type="button">Comprar ahora</button>
                        <button className="btn btn-outline-primary" type="button">Agregar al carrito</button>
                    </div>*/
export default ItemDetalles