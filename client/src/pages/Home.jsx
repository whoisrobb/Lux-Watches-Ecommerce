import React from 'react'
import { Link } from 'react-router-dom'

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
    </section>
  )
}

export default Home