import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    
  return (
    <div className='footer'>
        <div className="company">
            <h2>LUX WATCHES</h2>
            <ul>
                <li>1234 Elm Street</li>
                <li>Suite 567</li>
                <li>Anytown, Dawg 12345</li>
            </ul>
            <div className="social-media">
                <Link><i className="uil uil-twitter"></i></Link>
                <Link><i className="uil uil-instagram"></i></Link>
                <Link><i className="uil uil-facebook-f"></i></Link>
            </div>
        </div>
        <div className="customer-care">
            <h2>customer care</h2>
            <ul>
                <li><Link to={'/returns-policy'}>Returns policy</Link></li>
                <li><Link to={'/deposit-policy'}>Deposit policy</Link></li>
                <li><Link to={'/privacy-policy'}>Privacy policy</Link></li>
                <li><Link to={'/shipping-policy'}>Shipping policy</Link></li>
                <li><Link to={'/'}>FAQs</Link></li>
                <li><Link to={'/terms-of-service'}>Terms of service</Link></li>
            </ul>
        </div>
        <div className="explore">
            <h2>explore</h2>
            <ul>
                <li><Link to={'/repairs'}>Repairs</Link></li>
                <li><Link to={'/valuation'}>Valuation</Link></li>
                <li><Link to={'refurbishing'}>Refurbishing</Link></li>
                <li><Link to={''}>About us</Link></li>
                <li><Link to={''}>Contact us</Link></li>
            </ul>
        </div>
        <div className="subscription">
            <h2>subscribe</h2>
                <p>Sign up to our moontly newsletter</p>
            <form action="">
                <input
                    type="email"
                    name=""
                    placeholder='Enter valid E-Mail'
                />
            </form>
            <button type='submit'>send</button>
        </div>
    </div>
  )
}

export default Footer