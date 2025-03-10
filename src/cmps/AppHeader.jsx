import Logo from '../assets/imgs/Logo.png'

export function AppHeader() {
  function HandleWhatsappClick() {
    window.open('https://wa.me/972522027364', '_blank')
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
    </header>
  )
}
