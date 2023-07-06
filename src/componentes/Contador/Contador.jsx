import { useState } from "react";

const Contador = ({ stock, inicial, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <div className="container text-center">
            <div className="row">
                <p className="card-text"> Stock:  {stock} </p>
                <button onClick={aumentarContador}> + </button>
                <strong> {contador} </strong>
                <button onClick={disminuirContador}> - </button>

                <button onClick={() => funcionAgregar(contador)} className="btn btn-outline-primary" type="button" > Agregar al carrito </button>
            </div>
        </div>
    )
}

export default Contador