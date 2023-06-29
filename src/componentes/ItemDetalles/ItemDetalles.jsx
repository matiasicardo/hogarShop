const ItemDetalles = ({ id, nombre, precio, img, desc }) => {
    return (
        <>
            <div className="container card text-center">
                <div className="row">
                    <div className="col-md-6 order-md-1">
                        <img className="h-1 d-inline-block" src={img} alt={nombre} />
                    </div>
                    <div className="order-md-2 col-md-6 lead">
                        <h3 className="card-title">Modelo: {nombre}</h3>
                        <p className="card-text">  Descripcion: {desc} </p>
                        <p className="card-text"> Precio: $ {precio} </p>
                    
                    <div className="d-grid gap-3 col-10 mx-auto">
                        <button className="btn btn-primary" type="button">Comprar ahora</button>
                        <button className="btn btn-outline-primary" type="button">Agregar al carrito</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetalles