import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "../SStyle.css"
import Timer from '../../components/Timer/Timer'

function Pomodoro() {
  return (
    <div className='container'>
      <Header show={true}/>
      <Timer />
      <Footer show={true}/>
    </div>
  )
}

export default Pomodoro