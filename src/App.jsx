import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetallesCont from "./componentes/ItemDetallesCont/ItemDetallesCont"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./componentes/NavBar/NavBar"


const App = () => {
  return (
    <>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App