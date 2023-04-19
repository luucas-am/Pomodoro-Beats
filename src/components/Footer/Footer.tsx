import './Footer.css'
import React from 'react'
import Start from '../../assets/img/Play.png'
import AI from '../../assets/img/Ai.png'

const Footer = (props: { show : boolean }) => {
  return (
    <footer id='footer'>
      <div id='footer-l'>
        <p>Made with 🤍 by <a href="https://github.com/luucas-am">Lucas Andrade</a></p>
      </div>
        { props.show && (
          <>
            <div id='footer-m'>
              <button className='btn-start'><img src={Start} alt="start-icon" /></button>
            </div>
            <div id='footer-r'>
              <button className='btn-api'><img src={AI} alt="" /></button>
            </div>
          </>
        )}
    </footer>
  )
}

export default Footer