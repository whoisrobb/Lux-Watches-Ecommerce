import React from 'react'
import { depositPolicy } from '../utils/contents'

const DepositPolicy = () => {
    const content = depositPolicy
  return (
    <section id='deposit-policy'>
        <div className="wrapper">
            <div className='content' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </section>
  )
}

export default DepositPolicy