import React from 'react'
import { repair } from '../utils/contents'

const Repairs = () => {
    const content = repair
  return (
    <section id='repairs'>
        <div className="wrapper">
            <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </section>
  )
}

export default Repairs