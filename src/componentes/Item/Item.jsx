import { Link } from "react-router-dom"
//Tarjetas

const Item = ({ id, nombre, precio, img, desc, stock, idCat }) => {
    return (
        <div>
            <div className="card text-center bg-dark">
                <img className="h-50 d-inline-block" src={img} alt={nombre} />
                <div className="card-body text-primary">
                    <h3 className="card-title"> {nombre}</h3>
                    <p className="card-text text-info"> Precio: $ {precio} </p>
                    <p className="card-text text-info">  {desc} </p>
                    <p>{stock}</p>
                    <p>Seccion : {idCat}</p>
                    <div>
                        <Link to={`/item/${id}`}>
                            <button className="btn btn-success mb-1"> Ver detalles</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item