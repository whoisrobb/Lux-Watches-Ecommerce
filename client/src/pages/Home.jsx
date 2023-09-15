import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { serverUrl } from '../utils/url'

const services = [
  'Sell',
  'Refurbishing',
  'Repairs',
  'Valuation'
]

const Home = () => {
  const [watchData, setWatchData] = useState(null)

  const name = [
    'Audemars Piguet',
    'Breitling',
    'Casio',
    'Patek Phillipe',
    'Rolex',
    'Tudor',
    'Vacheron Constantin',
    'Omega'
  ]
  
  useEffect(() => {
    // Function to fetch brand names
    const fetchBrandNames = async () => {
        try {
            const response = await fetch(`${serverUrl}/brands/byName`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ name })
            })
            const data = await response.json(response)
            setWatchData(data.brand)
        } catch (err) {
            console.error(err)
        }
    }

    fetchBrandNames()
  }, [])

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
            watchData &&
            watchData.map((brand) => (
              <div key={brand._id} className='item'>
                <Link
                  to={`/watches?brand=${brand._id}`}>
                    <img src={`../brands/${brand.name}.jpg`} alt="" />
                  </Link>
                  <p>{brand.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Home