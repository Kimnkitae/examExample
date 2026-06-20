import "./Home.css"
import hero from '../assets/img/hero.png'
import more from '../assets/icons/more.svg'
import ad1 from '../assets/icons/ad1.svg'
import ad2 from '../assets/icons/ad2.svg'
import heroReviews from '../assets/img/reviews.png'

function Home() {
  

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero__inner">
              <div className="hero__left">
                <div className="p"></div>
                <div className="h1"></div>
                <div className="hero__btn">
                  <img src={heroReviews} />
                </div>
              </div>
              <div className="hero__right">
                <img className="hero__img" src={hero} alt="more" />
              </div>
              <div className="ad1">
                <img src={ad1} />
              </div>
              <div className="ad2">
                <img src={ad2} />
              </div>
              <div className="hero__video">
                <img src={more} />
              </div>
          </div>
        </div>
      </div>

      <div className="courses">
        <div className="container">
          <div className="courses__inner">
            <h2></h2>
            <ul className="courses__filter">

            </ul>
            <ul className="courses__menu">

            </ul>
          </div>
        </div>
      </div>

      <div className="schedule">
        <div className="container">
          <div className="schedule__inner">
            <h2></h2>
            <p></p>
            <ul className="schedule__menu">

            </ul>
            <a href=""></a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="container">
          <div className="card__inner">
            <div className="card__left">

            </div>
            <div className="card__right">

            </div>
          </div>
        </div>
      </div>

      <div className="training">
        <div className="container">
          <div className="training__inner">
            <div className="training__left">

            </div>
            <div className="training__right">

            </div>
          </div>
        </div>
      </div>

      <div className="gift-cards">
        <div className="container">
          <div className="gift-cards__inner">
            <div className="gift-cards__left">

            </div>
            <div className="gift-cards__right">

            </div>
          </div>
        </div>
      </div>

      <div className="bundles">
        <div className="container">
          <div className="bundles__inner">
            <h2></h2>
            <p></p>
            <ul className="bundles__menu">

            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home