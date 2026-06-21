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
              <li className='header__menu-item'><a>Courses</a></li>
              <li className='header__menu-item'><a>Home</a></li>
              <li className='header__menu-item'><a>Category</a></li> 
              <li className='header__menu-item'><a>Contacts</a></li>
            </ul>
            <div className="header__btns">
              <button className='header__btn btn__log-in'>LOG IN</button>
              <button className='header__btn btn__sign-up'>SIGN UP</button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header