import { Fragment } from "react"
import AllProducts from "./pages/all-products"
import Header from "./pages/header"
import Footer from "./pages/footer"
import ProductsContextProvider from "./context/productsContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/cart"

function App() {
  return (
    <Fragment>
      <ProductsContextProvider >
        <BrowserRouter >
        <Header />
          <Routes >
            <Route path="/" element={<AllProducts />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        <Footer />
        </BrowserRouter>
      </ProductsContextProvider>
    </Fragment>
  )
}

export default App
