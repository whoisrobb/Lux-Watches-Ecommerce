import React from 'react'
import { termsOfService } from '../utils/contents'

const TermsOfService = () => {
    const content = termsOfService
  return (
    <section id='terms-of-service'>
        <div className="wrapper">
            <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </section>
  )
}

export default TermsOfService