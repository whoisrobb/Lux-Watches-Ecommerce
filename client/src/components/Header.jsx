import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { serverUrl } from '../utils/url'
import { useCart } from './CartProvider'


const Header = () => {
    const [watchesDropdown, setWatchesDropdown] = useState(false)
    const [accessoriesDropdown, setAccessoriesDropdown] = useState(false)
    const [servicesDropdown, setServicesDropdown] = useState(false)
    const [column1, setColumn1] = useState(null)
    const [column2, setColumn2] = useState(null)

    const { cartQuantity } = useCart()

    useEffect(() => {
        // Function to fetch brand names
        const fetchBrandNames = async () => {
            try {
                const response = await fetch(`${serverUrl}/brands/all`);
                if (response.ok) {
                    const data = await response.json()
    
                    // Split the brand names into two columns
                    const midIndex = Math.ceil(data.length / 2)
                    const brands1 = data.slice(0, midIndex)
                    const brands2 = data.slice(midIndex)
                    
                    setColumn1(brands1)
                    setColumn2(brands2)
                }
            } catch (err) {
                console.error(err)
            }
        }
    
        // Fetch brand names when the component mounts
        fetchBrandNames()
    }, [])
    
    // console.log(column1)
    console.log(JSON.stringify(cartQuantity))

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
                    <Link to={'/cart'}><i className="uil uil-shopping-cart"></i>{cartQuantity > 0 ? <span>{JSON.stringify(cartQuantity)}</span> : ''}</Link>
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
                                    <Link to={'/watches?type=Ladies'}>Ladies Watches</Link>
                                </li>
                                <li>
                                    <Link to={'/watches?type=Unisex'}>Unisex Watches</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="brand">
                            <div className="the-brands">
                                <div className="type-1">
                                    <ul>
                                        {column1 ? (
                                            column1.map((brand, index) => (
                                                    <li key={index}>
                                                        <Link to={`/watches?brand=${brand._id}`}>{brand.name}</Link>
                                                    </li>
                                            ))
                                            ) : (
                                                <p>Loading brands for column 1...</p>
                                                )}
                                            </ul>
                                </div>
                                <div className="type-2">
                                    <ul>
                                        {column2 ? (
                                            column2.map((brand, index) => (
                                                <li key={index}>
                                                    <Link to={`/watches?brand=${brand._id}`}>{brand.name}</Link>
                                                </li>
                                            ))
                                            ) : (
                                                <li>Loading brands for column 2...</li>
                                        )}
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