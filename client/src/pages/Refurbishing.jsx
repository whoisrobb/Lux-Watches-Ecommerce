import React from 'react'
import { refurbishing } from '../utils/contents'

const Refurbishing = () => {
    const content = refurbishing
  return (
    <section id='refurbishing'>
        <div className="wrapper">
            <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </section>
  )
}

export default Refurbishing