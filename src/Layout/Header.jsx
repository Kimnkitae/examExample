import './Header.css'
import logo from '../assets/icons/logo.svg'

function Header() {
  

  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header__inner">
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
            <ul className='header__menu'>
              
            </ul>
            <div className="header__btns">

            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header