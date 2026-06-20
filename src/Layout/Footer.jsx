import logo from '../assets/icons/logo.svg'
import address from '../assets/icons/address.svg'
import phone from '../assets/icons/phone.svg'
import clock from '../assets/icons/time.svg'
import email from '../assets/icons/email.svg'

function Footer() {
  

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__left">
              <img src={logo} alt="" />
              <ul>
                <li><img src={address} />Address:<br />
                Lorem ipsum dolor sit amet, consectetur<br />
                adipscing elit.
                </li>
                <li><img src={phone} />Tel: +9229341037</li>
                <li><img src={clock} />Response hours: 8 to 20</li>
                <li><img src={email} />Email: info@onlearn.com</li>
              </ul>
            </div>

            <div className="footer__right">
              <div className="categories">
                <p>Categories</p>
                <ul>
                  <li><a href="">Counseling</a></li>
                  <li><a href="">Health and fitness</a></li>
                  <li><a href="">Individual development</a></li>
                  <li><a href="">more</a></li>
                </ul>
              </div>
              <div className="links">
                <p>Links</p>
                <ul>
                  <li>About us</li>
                  <li>blog</li>
                </ul>
              </div>
            </div>
            <div className="input">
              <p>Stay up to date with the latest courses</p>
              <input type="text" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer