import { Button, ButtonGroup, Card } from "react-bootstrap"
import { categories } from "../constants/categories"
import { products } from "../constants/products"

import "../index.css"
import { useContext } from "react"
import { ProductsContext } from "../context/productsContext"


const AllProducts = () => {

  const {addToCart , cart , increese , decreese} = useContext(ProductsContext)

  return (
    <main>
      <div className="categories">
        <section>
          <div className="container">
            <div className="categories-container">
              {
                categories.map((el)=>(
                  <a key={el.name} href={`#${el.name}`}>{el.name}</a>
                ))
              }
            </div>
          </div>
        </section>
      </div>
      <div className="all-products">
      {
        categories.map((el)=>(
          <section id={el.name} key={el.name}>
            <div className="container">
              <h1>{el.name}</h1>
              <div className="products-row">
                {
                  products.map((el1)=>{if (el1.category === el.name) {
                    let checkCart = cart.find((el2)=> el2.id === el1.id)
                    return <Card key={el.id} >
                      {/* <Card.Img variant="top" src={el1.image} /> */}
                      <Card.Body>
                        <Card.Title>{el1.name}</Card.Title>
                        <Card.Text>
                          {el1.description}
                        </Card.Text>
                        <div className="card-btn-group">
                          {checkCart ? 
                            <ButtonGroup aria-label="Basic example">
                              <Button onClick={()=>decreese(el1.id)} variant="secondary">-</Button>
                              <span className="btn bg-secondary">{checkCart.quantity}</span>
                              <Button onClick={()=>increese(el1.id)} variant="secondary">+</Button>
                            </ButtonGroup> :
                            <Button onClick={()=>addToCart(el1.id)} variant="primary">Выбрать</Button>}                                         
                          <span>{el1.price} ₽</span>
                        </div>
                      </Card.Body>
                    </Card>
                  }})
                }
              </div>
            </div>
          </section>
        ))
      }
      </div>
      <section>
        <div className="container2">
          <h3>Доставка пиццы в Москве</h3>
          <br />
          <p>
          Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.
          <br />
          <br />
          Как сделать заказ
          <br />
          <br />
          Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое в «Корзину»; не уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии Domino’s. И не забудьте оплатить заказ курьеру!
          </p>
        </div>
      </section>
    </main>
  )
}

export default AllProducts