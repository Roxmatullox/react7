import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { products } from "../constants/products";

export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

  const [cart , setCart] = useState(JSON.parse(localStorage.getItem("cartProducts")) || [])

  const addToCart = (id) =>{
    let product = products.find((el)=>el.id === id)
    let CartProducts
    let productInCart = cart.find((el)=>el.id === id)


    if (productInCart) {
      CartProducts =  cart.map((el)=>{
        if(el.id === id){
          el.quantity++
        }

        return el
      })
    } else {
      product.quantity = 1
      CartProducts = [...cart , product]
    }
    localStorage.setItem("cartProducts" , JSON.stringify(CartProducts))
    setCart(CartProducts)
  }


  const increese = (id) =>{
    let CartProducts =  cart.map((el)=>{
      if(el.id === id){
        el.quantity++
      }

      return el
    })

    localStorage.setItem("cartProducts" , JSON.stringify(CartProducts))
    setCart(CartProducts)
  }

  const decreese = (id) =>{
    const product = cart.find((el)=>el.id === id)
    let CartProducts
    if (product.quantity > 1) {
      CartProducts =  cart.map((el)=>{
        if(el.id === id){
          el.quantity--
        }
        return el
      })
    } else {
      CartProducts = cart.filter((el)=>el.id !== id)
    }


    localStorage.setItem("cartProducts" , JSON.stringify(CartProducts))
    setCart(CartProducts)
  }

  const state = {cart , addToCart , increese , decreese}
  return (
    <ProductsContext.Provider value={state} >{children}</ProductsContext.Provider>
  )
}

ProductsContextProvider.propTypes = {
  children:PropTypes.node
}


export default ProductsContextProvider