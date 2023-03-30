import './Header.css'
import React from 'react'
import Logo from '../../assets/img/PBL.png'
import Settings from '../../assets/img/Settings.png'

const Navbar = (props: { show: boolean }) => {
  return (
    <div id='header'>
        <div id='header-l' className='hl noselect'>
            <img className='logo' src={Logo} alt="logo" />
        </div>
        { props.show && (
        <>
          <div id='header-m'>
            <span className='item'>
              <span>0 Pomodoros</span>
            </span>
            <span className='item'>
              <span>0 Breaks</span>
            </span>
            <span className='item'>
              <span>0 Long Breaks</span>
            </span>
          </div>
          <div id='header-r'>
            <button className='btn-settings'><img className='settings-icon' src={Settings} alt="settings" /></button>
          </div>
        </>
        )}
    </div>
  )
}

export default Navbar