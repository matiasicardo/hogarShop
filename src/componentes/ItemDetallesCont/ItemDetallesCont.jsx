import { useState, useEffect } from "react";
//import { getUnProducto } from "../../asyncmock"
import ItemDetalles from "../ItemDetalles/ItemDetalles";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/config"; 

const ItemDetallesCont = () => {
    const [producto, setProducto] = useState(null)
    
    const { idItem } = useParams()

    useEffect (() => {
        const nuevoDoc = doc(db, "inventario", idItem);

        getDoc(nuevoDoc)
            .then((res) => {
                const data = res.data();
                const nuevoProducto = {id: res.id, ...data};
                setProducto(nuevoProducto);
            })
            .catch(error => console.log(error))
    }, [idItem])

//    useEffect(() => {
//    getUnProducto(idItem)
//            .then((res) => setProducto (res))
//            .catch((error) => console.log(error))
//    }, [idItem])
  
    return (
    <div>
        <h2 className="display-6">Detalles del soporte:</h2>
        <ItemDetalles {...producto} />
    </div>
  )
}

export default ItemDetallesCont