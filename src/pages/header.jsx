import { useContext } from "react";
import navLogo from "../assets/nav-logo.svg";
import { categories } from "../constants/categories";


import "../index.css"
import { ProductsContext } from "../context/productsContext";


const Header = () => {
  window.addEventListener("scroll", function () {
    if (this.scrollY > 50) {
      document.querySelector("nav").classList.remove("none-nav")
    } else {
      document.querySelector("nav").classList.add("none-nav")
    }
  });
  
  const {cart} = useContext(ProductsContext)

  return (
    <header>
      <div className="container">
        <div className="header-container">
          <img src={navLogo} alt="" />
          <nav className=" none-nav">
            {
              categories.map((el)=>(
                <a key={el.name} href={`#${el.name}`}>{el.name}</a>
              ))
            }
          </nav>
          <button className="btn btn-danger">
            Cart <span>{cart.length}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header