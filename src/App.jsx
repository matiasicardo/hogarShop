import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetallesCont from "./componentes/ItemDetallesCont/ItemDetallesCont"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./componentes/NavBar/NavBar"
import { CarritoProvider } from "./context/CarritoContext"
import Cart from "./componentes/Cart/Cart"
import Checkout from "./componentes/Checkout/Checkout"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route
              path="/item/:idItem"
              element={<ItemDetallesCont />} />
            <Route
              path="/cart"
              element={<Cart/>} />
            <Route
            path="/checkout"
            element={<Checkout/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App