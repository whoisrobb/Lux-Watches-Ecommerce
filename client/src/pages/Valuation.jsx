import React from 'react'
import { valuation } from '../utils/contents'

const Valuation = () => {
    const content = valuation
  return (
    <section id='valuation'>
        <div className="wrapper">
            <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </section>
  )
}

export default Valuation