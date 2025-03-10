import Logo from '../assets/imgs/Logo.png'
import Menu from '../assets/imgs/svgs/MobileMenu.svg'
import { useState } from 'react'

export function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  document.body.addEventListener('click', (e) => {
    const EL_MOBILE_MENU_LINKS = document.querySelector('.mobile-menu-links')
    // console.log(e.target)
    if (
      !e.target.closest('.mobile-menu-links') &&
      !e.target.closest('.menu-icon') &&
      EL_MOBILE_MENU_LINKS.closest('.open')
    ) {
      HandleMobileMenuClick()
    }
  })

  function HandleWhatsappClick() {
    window.open('https://wa.me/972522027364', '_blank')
  }

  function HandleMobileMenuClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    console.log(isMobileMenuOpen)
  }

  return (
    <header className='app-header'>
      <div className='left-links-container'>
        <a onClick={HandleWhatsappClick} className='nav-links' href='#'>
          מעדיף לדבר
        </a>
        <a className='nav-links' href='#'>
          פוזינג
        </a>
      </div>
      <img className='logo' src={Logo} alt='Logo' />
      <div className='right-links-container'>
        <a className='nav-links' href='#'>
          איך זה עובד
        </a>
        <a className='nav-links' href='#'>
          תוצאות
        </a>
      </div>
      {/* <h1>Team Hazan</h1> */}
      <div className='mobile-menu'>
        <img
          onClick={HandleMobileMenuClick}
          className='menu-icon'
          src={Menu}
          alt='menu'
        />
        <div className={`mobile-menu-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <button onClick={HandleMobileMenuClick}>X</button>
          <a onClick={HandleWhatsappClick} className='nav-links' href='#'>
            מעדיף לדבר
          </a>
          <a className='nav-links' href='#'>
            פוזינג
          </a>
          <a className='nav-links' href='#'>
            איך זה עובד
          </a>
          <a className='nav-links' href='#'>
            תוצאות
          </a>
        </div>
      </div>
    </header>
  )
}
