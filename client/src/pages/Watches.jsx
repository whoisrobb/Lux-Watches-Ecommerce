import React, { useEffect, useState } from 'react'
import { serverUrl } from '../utils/url'
import { Link, useLocation } from 'react-router-dom'

const Watches = () => {
    const [data, setData] = useState(null)
    const [brandData, setBrandData] = useState()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const watchType = searchParams.get('type')
    const watchBrand = searchParams.get('brand')

    useEffect(() => {
        fetchWatch()
    }, [watchType, watchBrand])


    const fetchWatch = async () => {
        try {
            let response
            let dataBrand

            if (watchType) {
                response = await fetch(`${serverUrl}/watch/get?type=${watchType}`)
            } else if (watchBrand) {
                response = await fetch(`${serverUrl}/watch/get?brand=${watchBrand}`)
            }

            const watchData = await response.json(response)
            setData(watchData)
        } catch (err) {
            console.error(err)
        }
    }

  return (
    <section id='watches'>
        {
            data &&
                <div className='wrapper'>
                {
                    data.map((item, index) => (
                        <div className='item' key={index}>
                            <div className="img">
                                <Link to={`/detail/${item._id}`}>
                                    <img src={`${serverUrl}/uploads/${item.coverImage}`} alt="" />
                                </Link>
                            </div>
                            <div className="brand-name">
                                <Link to={`/watches?brand=${item.brand._id}`}>{item.brand.name}</Link>
                            </div>
                            <h4>{item.name}</h4>
                            <p>{item.price}</p>
                        </div>
                    ))
                }
            </div>
        }
    </section>
  )
}

export default Watches