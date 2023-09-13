import React, { useEffect, useState } from 'react'
import { serverUrl } from '../utils/url'

// name, price, description, type, brand, coverImage: image

const options = [
    'Chronograph',
    'Diving',
    'GMT',
    'Vintage',
    'Gents',
    'Ladies',
    'Unisex',
]

const watchBrands = [   
    'Rolex',
    'Audemars Piguet',
    'Patek Philippe',
    'Vacheron Constantin',
    'Cartier',
    'Breitling',
    'Breguet',
    'Omega',
    'Bulgari',
    'Tudor',
    'Tag Heuer',
    'Nomos',
    'Casio',
    'Seiko',
    'Tissot'
]

const Models = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [brandId, setBrandId] = useState('')
    const [brand, setBrand] = useState('Audemars Piguet')
    const [files, setFiles] = useState(null)
    const [selectedOptions, setSelectedOptions] = useState([])
    
    const [brandName, setBrandName] = useState('')
    const [brandDescription, setBrandDescription] = useState('')

    // const formData = { name, price, description, type: selectedOptions, brand: brandId }
    // console.log(formData)

    useEffect(() => {
        fetchBrand()
    }, [brand])

    const fetchBrand = async () => {
        try {
            const response = await fetch(`${serverUrl}/brands/one`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: brand })
            })
            const data = await response.json()
            console.log(data.brand[0])
            console.log(data.brand[0]._id)
            setBrandId(data.brand[0]._id)
        } catch (err) {
          console.error(err);
        }
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('description', description)
        formData.append('brand', brandId)
        formData.append('image', files)
        
        // Convert selectedOptions to an array if it's not already one
        const typeArray = Array.isArray(selectedOptions) ? selectedOptions : [selectedOptions]

        // Append each type value as a separate item in the formData
        typeArray.forEach((typeValue) => {
            formData.append('type', typeValue)
        })

        console.log(formData)

        try {
            const response = await fetch(`${serverUrl}/watch/create`, {
                method: 'POST',
                mode: 'cors',
                body: formData
            })
            .then((response) => {
                if (response.ok) {
                    console.log('success')
                }
            })
        } catch (err) {
            console.error(err)
        }
    }
    
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      // If the option is already selected, remove it from the array
      setSelectedOptions(selectedOptions.filter((item) => item !== option))
    } else {
      // If the option is not selected, add it to the array
      setSelectedOptions([...selectedOptions, option])
    }
  }

  const handleBrandSubmit = async (e) => {
    e.preventDefault()

    try {
        const response = await fetch(`${serverUrl}/brands/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: brandName, description: brandDescription })
        })
        .then((response) => {
            if (response.ok) {
                console.log('success')
            }
        })
    } catch (err) {
        console.error(err)
    }
  }

  return (
    <div>
        <form
            onSubmit={handleSubmit}
            >
                
            <div className="name">
                <label>
                    <input
                        type="name"
                        className="name"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='name'
                        required
                    />
                </label>
            </div>

            <div className="price">
                <label>
                    <input
                        type="price"
                        className="price"
                        name='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='price'
                        required
                    />
                </label>
            </div>

            <div className="description">
                <label>
                    <input
                        type="description"
                        className="description"
                        name='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='description'
                        required
                    />
                </label>
            </div>
            
            <div className="file-input-container">
                <input
                    type="file"
                    className='file-input'
                    id='file-input'
                    onChange={(e) => setFiles(e.target.files[0])}
                    aria-label="File browser example"
                />
                <label htmlFor='file-input' className="file-label">
                    <span className="file-label-text">
                        {files ? files.name : <div className='button'>Choose a file</div>}
                    </span>
                </label>
            </div>

            <div className="brand-select">
                <label htmlFor="brandSelect">Select a Brand:</label>
                <select
                    id="brandSelect"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    >
                    { watchBrands.map((brand) => {
                        return <option key={brand} value={`${brand}`}>{ brand }</option>
                    }) }
                </select>
            </div>

            <h3>Select Watches:</h3>
            <ul>
                {options.map((option) => (
                <li key={option}>
                    <label>
                    <input
                        type="checkbox"
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                    />
                    {option}
                    </label>
                </li>
                ))}
            </ul>

            <button type='submit'>Send</button>
        </form>
        <hr/>
        <form onSubmit={handleBrandSubmit}>
            
            <div className="brandName">
                <label>
                    <input
                        type="brandName"
                        className="brandName"
                        name='brandName'
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder='brandName'
                        required
                    />
                </label>
            </div>
            
            <div className="brandDescription">
                <label>
                    <input
                        type="brandDescription"
                        className="brandDescription"
                        name='brandName'
                        value={brandDescription}
                        onChange={(e) => setBrandDescription(e.target.value)}
                        placeholder='brandDescription'
                        required
                    />
                </label>
            </div>

            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default Models