import './CardWidget.css'

const CardWidget = () => {
    const carrito = "https://w7.pngwing.com/pngs/1008/303/png-transparent-shopping-cart-icon-product-return-shopping-cart-retail-supermarket-objects-thumbnail.png"
  return (
    <div>
        <img className="carrito" src={carrito} alt="Imagen del carrito" />
        <strong> 10 </strong>
    </div>
  )
}

export default CardWidget