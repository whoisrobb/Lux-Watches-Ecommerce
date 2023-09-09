import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [watchesDropdown, setWatchesDropdown] = useState(false)
    const [accessoriesDropdown, setAccessoriesDropdown] = useState(false)
    const [servicesDropdown, setServicesDropdown] = useState(false)

  return (
    <div className='header'>
        <div className="top">
            <div className="logo">
                <Link to={'/'}>Lux Watches</Link>
            </div>
            <div className="actions">
                <div className="search">
                    <i className="uil uil-search"></i>
                </div>
                <div className="cart">
                    <Link to={''}><i className="uil uil-shopping-cart"></i></Link>
                </div>
                <div className="menu">
                    <i className="uil uil-bars"></i>
                </div>
            </div>
        </div>
        <div className="bottom">
            
            <div className="dropdown-button" onMouseEnter={() => setWatchesDropdown(true)} onMouseLeave={() => setWatchesDropdown(false)}>
                <button className="dropdown">
                    watches
                    <i className="uil uil-angle-down"></i>
                </button>
                { watchesDropdown && 
                    <div className="dropdown-container watches">
                        <div className="type">
                            <ul>
                                <li>
                                    <Link to={'/watches?type=Chronograph'}>Chronographs</Link>
                                </li>
                                <li>
                                    <Link to={'/watches?type=Diving'}>Diving Watches</Link>
                                </li>
                                <li>
                                    <Link to={'/watches?type=GMT'}>GMT Watches</Link>
                                </li>
                                <li>
                                    <Link to={'/watches?type=Vintage'}>Vintage Watches</Link>
                                </li>
                                <li>
                                    <Link to={'/watches?type=Gents'}>Gents Watches</Link>
                                </li>
                                <li>
                                    <Link to={'/watches?Ladies'}>Ladies Watches</Link>
                                </li>
                                <li>
                                    <Link to={'/watches?Unisex'}>Unisex Watches</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="brand">
                            <div className="the-brands">
                                <div className="type-1">
                                    <ul>
                                        <li><Link to={'/'}>Audemars Piguet</Link></li>
                                        <li><Link to={'/'}>Vacheron Constantin</Link></li>
                                        <li><Link to={'/'}>Patek Phillipe</Link></li>
                                        <li><Link to={'/'}>Cartier</Link></li>
                                        <li><Link to={'/'}>Rolex</Link></li>
                                        <li><Link to={'/'}>Breguet</Link></li>
                                    </ul>
                                </div>
                                <div className="type-2">
                                    <ul>
                                        <li><Link to={'/'}>Breitling</Link></li>
                                        <li><Link to={'/'}>Omega</Link></li>
                                        <li><Link to={'/'}>Bulgari</Link></li>
                                        <li><Link to={'/'}>Casio</Link></li>
                                        <li><Link to={'/'}>Tissot</Link></li>
                                        <li><Link to={'/'}>Seiko</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            
            <div className="dropdown-button" onMouseEnter={() => setAccessoriesDropdown(true)} onMouseLeave={() => setAccessoriesDropdown(false)}>
                <button className="dropdown">
                    accessories
                    <i className="uil uil-angle-down"></i>
                </button>
                { accessoriesDropdown && 
                    <div className="dropdown-container accessories">
                        <ul>
                            <li><Link to={''}>Watch boxes</Link></li>
                            <li><Link to={''}>Watch rolls</Link></li>
                            <li><Link to={''}>Watch straps</Link></li>
                        </ul>
                    </div>
                }
            </div>
            
            <div className="dropdown-button" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
                <button className="dropdown">
                    services
                    <i className="uil uil-angle-down"></i>
                </button>
                { servicesDropdown && 
                    <div className="dropdown-container accessories">
                        <ul>
                            <li><Link to={'/repairs'}>Repairs</Link></li>
                            <li><Link to={'/refurbishing'}>Refurbishing</Link></li>
                            <li><Link to={'/valuation'}>Valuation</Link></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Header

// Chronographs
// Diving Watches
// GMT Watches
// Vintage Watches
// Gents Watches
// Ladies Watches
// Unisex Watches