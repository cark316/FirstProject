import React from 'react'
import './brand.css'
import { blue ,nasa ,esa ,spacex ,virgin ,venture } from './import.jsx'

const Brand = () => {
  return (
    <div className="mars__brand section__padding">
      <div>
        <img src={nasa} alt="nasa" width="70" />
      </div>
      <div>
        <img src={spacex} alt="spacex" />
      </div>
      <div>
        <img src={virgin} alt="virgin" />
      </div>
      <div>
        <img src={esa} alt="esa" width="70" />
      </div>
      <div>
        <img src={blue} alt="blue" />
      </div>
      <div>
        <img src={venture} alt="venture" />
      </div>
    </div>
  )
}

export default Brand