import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { serverUrl } from '../utils/url'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    
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
                    <h2>{product.name}</h2>
                    <Link to={`/watches?brand=${product.brand._id}`}>By {product.brand.name}</Link>
                    <p>Ksh {product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        }
    </section>
  )
}

export default ProductDetail