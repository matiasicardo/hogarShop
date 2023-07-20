import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetallesCont from "./componentes/ItemDetallesCont/ItemDetallesCont"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./componentes/NavBar/NavBar"
import { CarritoProvider } from "./context/CarritoContext"
import Cart from "./componentes/Cart/Cart"


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
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App