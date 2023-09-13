import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  'Sell',
  'Refurbishing',
  'Repairs',
  'Valuation'
]

const watchBrands = [   
  'Audemars Piguet',
  'Breitling',
  'Casio',
  'Patek Phillipe',
  'Rolex',
  'Tudor',
  'Vacheron Constantin',
  'Omega',
]

const Home = () => {
  return (
    <section id='home'>
      <div
        className="bg-image"
        style={{
          backgroundImage: 'url(../image-20.jpg)'
        }}
        >
        <div className="wrapper">
          <h1>Luxury on Your Terms, Time on Your Side</h1>
          <p>From Tradition to Innovation: Indulge in the Art of Timekeeping with Our Exquisite Watch Collection.</p>
          <Link to={''}>see collection</Link>
        </div>
      </div>
      <div className="services">
        {
          services.map((service) => (
            <Link
              key={service}
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url(../${service}.jpg)`
              }}
              to={`/${service}`}><Link to={`/${service}`}>{service}</Link></Link>
          ))
        }
      </div>
      <div className="brands">
        <h1>featured brands</h1>
        <div className="wrapper">
          {
            watchBrands.map((brand) => (
              <div key={brand} className='item'>
                <Link
                  to={`/watches?brand=${brand}`}>
                    <img src={`../brands/${brand}.jpg`} alt="" />
                  </Link>
                  <p>{brand}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Home