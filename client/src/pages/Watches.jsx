import React, { useEffect, useState } from 'react'
import { serverUrl } from '../utils/url'
import { useLocation } from 'react-router-dom'

const Watches = () => {
    const [data, setData] = useState(null)
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
                            <h2>{item.name}</h2>
                            <p>{item.brand.name}</p>
                            <img src={`${serverUrl}/uploads/${item.coverImage}`} alt="" />
                            { item.type.map((brandType, index) => (
                                <p key={index}>{brandType}</p>
                            ))}
                            <p>{item.price}</p>
                            <p>{item.description}</p>
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