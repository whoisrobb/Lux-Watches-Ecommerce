import React from 'react'
import { privacyPolicy } from '../utils/contents'

const PrivacyPolicy = () => {
    const content = privacyPolicy
  return (
    <section id='privacy-policy'>
        <div className="wrapper">
            <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </section>
  )
}

export default PrivacyPolicy