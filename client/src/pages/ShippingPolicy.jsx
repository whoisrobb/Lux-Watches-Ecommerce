import React from 'react'
import { shippingPolicy } from '../utils/contents'

const ShippingPolicy = () => {
    const content = shippingPolicy
  return (
    <section id='shipping-policy'>
        <div className="wrapper">
            <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </section>
  )
}

export default ShippingPolicy