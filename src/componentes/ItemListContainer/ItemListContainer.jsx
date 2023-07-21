import { useState, useEffect } from "react" //hooks
import ItemList from "../ItemList/ItemList" // agrupador de productos
//import { getProductos, getCategoria } from "../../asyncmock" // traigo la funcion con los productos
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../../service/config";


const ItemListContainer = ({}) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  //useEffect(() => {
    //const funcionProductos = idCategoria ? getCategoria : getProductos
//
    //funcionProductos(idCategoria)
      //.then((resolve) => setProductos(resolve))
      //.catch((error) => console.log(error))
  //}, [idCategoria])

  useEffect ( () => {
    const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
      .then( res => {
        const nuevosProductos = res.docs.map( doc => {
          const data = doc.data();
          return {id : doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch( error => console.log(error))
  }, [idCategoria])

  return (
    <div>
      <h2 className="display-6">Mis Soportes:</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer