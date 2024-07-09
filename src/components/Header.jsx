import React from 'react'
import './Header.css'
import sun from '../assets/icon-sun.svg'
import moon from '../assets/icon-moon.svg'

function Header({toggleDarkMode,darkMode}) {
  return (
    <header className='header'>
      <h1>devfinder</h1>
      <button onClick={toggleDarkMode} className="mode-toggle">
        {darkMode ? "Light" : "Dark"}
        {darkMode ? <img src={sun} alt='sun-icon'/> : <img src={moon} alt='moon-icon'/>}
      </button>
    </header>
  )
}

export default Header