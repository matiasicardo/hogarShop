import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../service/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const { carrito, vaciarCarrito, cantidadTotal, total } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");


    const manejadorFormulario = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completar todos los datos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los email deben ser iguales");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: cantidadTotal,
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        };
        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error creando el pedido");
            });
    };
    return (
        <div>
            <h2>Checkout</h2>
            <div className="container">
                <div className="row">
                    <form onSubmit={manejadorFormulario}>
                        {carrito.map(producto => (
                            <div>
                                <p>
                                    {producto.item.nombre} x {producto.cantidad}
                                </p>
                                <p>Precio ${producto.item.precio}</p>
                                <strong>Total a pagar: $ {total}</strong>
                                <hr />

                            </div>
                        ))}
                        <div>
                            <label htmlFor="nombre" className="form-label"> Nombre </label>
                            <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="" className="form-label"> Apellido </label>
                            <input type="text" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="" className="form-label"> Telefono </label>
                            <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="" className="form-label"> Email </label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="" className="form-label"> Email Confirmación </label>
                            <input type="email" className="form-control" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                        </div>
                        {
                            error && <p> {error}</p>
                        }
                        <button type="submit">Finalizar pedido</button>
                    </form>
                </div>
            </div>

            {
                ordenId && (
                    <strong>Gracias por tu compra! Tu numero de orden es {ordenId}</strong>
                )
            }
        </div>
    )
}

export default Checkout