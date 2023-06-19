import React from 'react'
import './whatTest.css'
import { Feature } from '../../components'

const WhatTest = () => {
  return (
    <div className="mars__whattest section__margin" id="how">
      <div className="mars__whattest-feature">
        <Feature title="What is mars expedition?" text="You go to MARS!!"/>
      </div>
      <div className="mars__whattest-heading">
        <h1 className="gradient__text">
          Acquire your land on mars today!
        </h1>
        <p>Explore the options</p>
      </div>
      <div className="mars__whattest-container">
        <Feature title="title1" text="test"/>
        <Feature title="title2" text="test"/>
        <Feature title="title3" text="test"/>
      </div>
    </div>
  )
}

export default WhatTest