import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CardWidget.css';

const CardWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const carrito = "https://w7.pngwing.com/pngs/1008/303/png-transparent-shopping-cart-icon-product-return-shopping-cart-retail-supermarket-objects-thumbnail.png"
  return (
    <div>
      <Link to="/cart">
        <img className="carrito" src={carrito} alt="Imagen del carrito" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CardWidget