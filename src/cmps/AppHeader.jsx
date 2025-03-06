import Logo from '../../assets/imgs/Logo.png'

export function AppHeader() {
  return (
    <header className='app-header'>
      <div className='left-links-container'>
        <a className='nav-links' href='#'>
          תוצאות
        </a>
      </div>
      <img src={Logo} alt='Logo' />
      <div className='right-links-container'>
        <a className='nav-links' href='#'>
          ליווי אישי
        </a>
      </div>
      {/* <h1>Team Hazan</h1> */}
    </header>
  )
}
