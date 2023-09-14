import React from 'react'
import { useCart } from '../components/CartProvider'
import { serverUrl } from '../utils/url'

const ShoppingCart = () => {
  const { cartItems, decreaseQuantity, increaseQuantity, removeFromCart } = useCart()
  const total = 384289710
  const subtotal = 384289710

  return (
    <section id='cart'>
      <div className="wrapper">
        <div className='items'>
          { cartItems.map((item) => (
            <div key={item._id} className='product'>
              <div className="img">
                <img src={`${serverUrl}/uploads/${item.coverImage}`} alt="" />
              </div>
              <div className="details">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
              <div className="actions">
                  <button className="minus" onClick={() => decreaseQuantity(item._id)}><i className="uil uil-minus"></i></button>
                  <div className="quantity">{item.quantity}</div>
                  <button className="plus" onClick={() => increaseQuantity(item._id)}><i className="uil uil-plus"></i></button>
              </div>
              <div className="total">
                <h4>{(item.quantity * Number(item.price)).toFixed(2)}</h4>
              </div>
              <button className='delete' onClick={() => removeFromCart(item._id)}>
                  <i className="uil uil-times"></i>
              </button>
            </div>
          )) }
        </div>
        <div className="checkout">
            <h1>summary</h1>
            <form>
              <input
                type="text"
                placeholder='Discount code or gift card'
                name=""
              />
              <button type="submit">Apply</button>
            </form>
            <div className="summary">
              <div className="subtotal">
                <p className="key">subtotal</p>
                <p className="value">{subtotal}</p>
              </div>
              <div className="shipping">
                <p className="key">shipping</p>
                <p className="value">free</p>
              </div>
              <div className="total">
                <p className="key">total</p>
                <p className="value">{total}</p>
              </div>
            </div>
            <button className="payment checkout">checkout</button>
            <button className="payment platform">pay with paypal</button>
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart