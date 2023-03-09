import './Header.css'
import React from 'react'
import Logo from '../../assets/img/PBL.png'
import Settings from '../../assets/img/Settings.png'

const Navbar = (props: { show: boolean }) => {
  return (
    <div id='header'>
        <div id='header-l'>
            <img className='logo' src={Logo} alt="logo" />
        </div>
        { props.show && (
        <>
          <div id='header-m'>
            <span className='item'>
              <strong>0</strong>
              <span> Pomodoros</span>
            </span>
            <span className='item'>
              <strong>0</strong>
              <span> Breaks</span>
            </span>
            <span className='item'>
              <strong>0</strong>
              <span> Long Breaks</span>
            </span>
          </div>
          <div id='header-r'>
            <button className='btn-settings'><img src={Settings} alt="settings" /></button>
          </div>
        </>
        )}
    </div>
  )
}

export default Navbar