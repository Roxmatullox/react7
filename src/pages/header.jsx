import { useContext } from "react";
import navLogo from "../assets/nav-logo.svg";
import { categories } from "../constants/categories";


import "../index.css"
import { ProductsContext } from "../context/productsContext";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";



const Header = () => {
  window.addEventListener("scroll", function () {
    if (this.scrollY > 50) {
      this.document.querySelector("nav").classList.remove("none-nav")
    } else {
      this.document.querySelector("nav").classList.add("none-nav")
    }
  });
  
  const {cart} = useContext(ProductsContext)

  return (
    <header>
      <Nav >
        <div className="container">
          <div className="header-container">
            <NavLink to="/" >
              <img src={navLogo} alt="" />
            </NavLink>
            <nav className=" none-nav">
              {
                categories.map((el)=>(
                  <a key={el.name} href={`#${el.name}`}>{el.name}</a>
                ))
              }
            </nav>
            <Nav.Item>
              <NavLink to="/cart" >
                <button className="btn btn-danger">
                  Cart <span>{cart.length}</span>
                </button>
              </NavLink>  
            </Nav.Item> 
          </div>
        </div>
      </Nav>
    </header>
  )
}

export default Header