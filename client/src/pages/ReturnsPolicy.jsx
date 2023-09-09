import React from 'react'
import { returnsPolicy } from '../utils/contents'

const ReturnsPolicy = () => {
    const content = returnsPolicy
  return (
    <section id='returns-policy'>
        <div className="wrapper">
            <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </section>
  )
}

export default ReturnsPolicy