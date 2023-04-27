import { Link } from 'react-router-dom'
import './Body.css'
import React from 'react'

const Body = () => {
  return (
    <div id='body'>
        <div className='item il noselect'>
            <h1>POMODORO</h1>
            <h2>BEATS</h2>
        </div>
        <div className='item ir'>
            <p>Your favorite songs and pomodoro timer<br/>together in one place.</p>
            <Link to='/pomodoro'>
              <button className='btn'>Get Started!</button>
            </Link>
        </div>
    </div>
  )
}

export default Body