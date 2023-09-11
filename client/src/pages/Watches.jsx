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
    <div>
        {data &&
            <div>
                {
                    data.map((item, index) => (
                        <div key={index}>
                            <Link to={`/detail/${item._id}`}>
                                <img src={`${serverUrl}/uploads/${item.coverImage}`} alt="" />
                            </Link>
                            <div className="brand-name">
                                <Link to={`/watches?brand=${item.brand._id}`}>{item.brand.name}</Link>
                            </div>
                            <h4>{item.name}</h4>
                            {/* { item.type.map((brandType, index) => (
                                <p key={index}>{brandType}</p>
                            ))} */}
                            <p>{item.price}</p>
                            {/* <p>{item.description}</p> */}
                            <hr/>
                        </div>
                    ))
                }
            </div>
        }
    </div>
  )
}

export default Watches