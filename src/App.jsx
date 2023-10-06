import { Fragment } from "react"
import AllProducts from "./pages/all-products"
import Header from "./pages/header"
import Footer from "./pages/footer"
import ProductsContextProvider from "./context/productsContext"

function App() {
  return (
    <Fragment>
      <ProductsContextProvider >
        <Header />
        <AllProducts />
        <Footer />
      </ProductsContextProvider>
    </Fragment>
  )
}

export default App
