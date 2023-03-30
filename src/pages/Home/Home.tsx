import React, { useState } from 'react'
import Body from '../../components/Body/Body'
import Header from '../../components/Header/Header'
import "./Home.css"

function Home() {
  return (
    <div>
      <Header show={false} />
      <Body />
    </div>
  )
}

export default Home