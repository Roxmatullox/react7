import { useContext } from "react"
import { Button, ButtonGroup, Card } from "react-bootstrap"
import { ProductsContext } from "../context/productsContext"

const Cart = () => {

  const {cart , increese , decreese} = useContext(ProductsContext)

  return (
    <main>
      <div className="cart-products">
        <div className="container">
          <div className="cart-container">
            {
              cart.map((product)=>{
                let checkCart = cart.find((el2)=> el2.id === product.id)
                return <Card key={product.id} className="mb-3">
                <Card.Header>{product.name}</Card.Header>
                <Card.Body>
                  <Card.Title>
                    1 шт: {product.price} || {product.quantity} шт: {product.quantity * product.price}
                  </Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <ButtonGroup aria-label="Basic example">
                  <Button onClick={()=>decreese(product.id)} variant="secondary">-</Button>
                  <span className="btn bg-secondary">{checkCart.quantity}</span>
                  <Button onClick={()=>increese(product.id)} variant="secondary">+</Button>
                  </ButtonGroup>                            </Card.Body>
              </Card>
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cart