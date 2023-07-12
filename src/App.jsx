import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetallesCont from "./componentes/ItemDetallesCont/ItemDetallesCont"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./componentes/NavBar/NavBar"
import { CarritoProvider } from "./context/CarritoContext"


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
              element={<h2> Carrito </h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App