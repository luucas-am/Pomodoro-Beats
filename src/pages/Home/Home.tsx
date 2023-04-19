import React, { useState } from 'react'
import Body from '../../components/Body/Body'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "../SStyle.css"

function Home() {
  return (
    <div className='container'>
      <Header show={false} />
      <Body />
      <Footer show={false}/>
    </div>
  )
}

export default Home