import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { serverUrl } from '../utils/url'
import { useCart } from '../components/CartProvider'

const ProductDetail = () => {
    const { getItemQuantity, addToCart, increaseQuantity, decreaseQuantity } = useCart()
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    let quantity

    if (product) {
        quantity = getItemQuantity(product._id)
    }
    
    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        try {
            const response = await fetch(`${serverUrl}/watch/get/${id}`)
            const data = await response.json(response)
            setProduct(data)
        } catch (err) {
            console.error(err)
        }
    }

  return (
    <section id='detail'>
        {
            product && 
            <div className="wrapper">
                <div className="img">
                    <img src={`${serverUrl}/uploads/${product.coverImage}`} alt="" />
                </div>
                <div className="details">
                    <div className="back-button">
                        <Link to={''}><i className="uil uil-angle-left"></i>Back to watches</Link>
                    </div>
                    <h1>{product.name}</h1>
                    <Link to={`/watches?brand=${product.brand._id}`}>By {product.brand.name}</Link>
                    <p className='price'>Ksh {product.price}</p>
                    <p>{product.description}</p>
                </div>
                <div className="pay">
                    {
                        quantity == 0 ?
                            <button className="cart" onClick={() => addToCart(product)}>add to cart</button>
                        :
                        <div className="actions">
                            <button className="minus" onClick={() => decreaseQuantity(product._id)}><i className="uil uil-minus"></i></button>
                            <div className="quantity">{quantity}</div>
                            <button className="plus" onClick={() => increaseQuantity(product._id)}><i className="uil uil-plus"></i></button>
                        </div>
                    }
                    <button className="platform">pay with PayPal</button>
                    <Link to={''}>More payment options?</Link>
                </div>
            </div>
        }
    </section>
  )
}

export default ProductDetail