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
                <div className="p">Never stop learning</div>
                <div className="h1">Grow up your skills by<br />
                online courses with <br />
                Onlearning</div>
                <div className="hero__btn">
                  <a href="#">EXPLORE PATH</a>
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
            <h2>Popular Courses</h2>
            <ul className="courses__filter">
              <li>All Programme</li>
              <li>Ui/Ux Design</li>
              <li>Program Design</li>
              <li>Program Design</li>
              <li>Program Design</li>
              <li>Program Design</li>
            </ul>
            <ul className="courses__menu">
              <li>
                <img src="" alt="" />
                <p>1 - 28 July 2022</p>
                <h3>Product Management Basic -<br />
                Course</h3>
                <p>Product Management Masterclass, you will learn with<br />
                Sarah Johnson - Head of Product Customer Platform<br />
                Gojek Indonesia.</p>
                <div className="price">
                  <p>$ 380 <strong>$ 500</strong></p>
                  <a href="">Enroll Now</a>
                </div>
              </li>
              <li>
                <img src="" alt="" />
                <p>1 - 28 July 2022</p>
                <h3>BM Data Science Professional<br />
                Certificate</h3>
                <p>Product Management Masterclass, you will learn with<br />
                Sarah Johnson - Head of Product Customer Platform<br />
                Gojek Indonesia.</p>
                <div className="price">
                  <p>$ 478 <strong>$ 500</strong></p>
                  <a href="">Enroll Now</a>
                </div>
              </li>
              <li>
                <img src="" alt="" />
                <p>1 - 28 July 2022</p>
                <h3>The Science of Well-Being</h3>
                <p>Product Management Masterclass, you will learn with<br />
                Sarah Johnson - Head of Product Customer Platform<br />
                Gojek Indonesia.</p>
                <div className="price">
                  <p>$ 123 <strong>$ 500</strong></p>
                  <a href="">Enroll Now</a>
                </div>
              </li>
              <li>
                <img src="" alt="" />
                <p>1 - 28 July 2022</p>
                <h3>Python for Everybody<br />
                Specialization</h3>
                <p>Product Management Masterclass, you will learn with<br />
                Sarah Johnson - Head of Product Customer Platform<br />
                Gojek Indonesia.</p>
                <div className="price">
                  <p>$ 467 <strong>$ 500</strong></p>
                  <a href="">Enroll Now</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="category">
        <div className="container">
          <div className="category__inner">
            <h2>Courses Category</h2>
            <p>Onlearing  is one powerful online software suite that combines all the tools<br />
            needed to run a successful school or office.</p>
            <ul className="schedule__menu">
              <li>
                <img src="" alt="" />
                <h3>Beauty</h3>
                <p> One powerful online software<br />
                suite that combines</p>
                <a href="">more</a>
              </li>
              <li>
                <img src="" alt="" />
                <h3>medical</h3>
                <p> One powerful online software<br />
                suite that combines</p>
                <a href="">more</a>
              </li>
              <li>
                <img src="" alt="" />
                <h3>sports</h3>
                <p> One powerful online software<br />
                suite that combines</p>
                <a href="">Explore courses</a>
              </li>
              <li>
                <img src="" alt="" />
                <h3>Nutrition</h3>
                <p> One powerful online software<br />
                suite that combines</p>
                <a href="">more</a>
              </li>
            </ul>
            <a href="">view all</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="container">
          <div className="card__inner">
            <div className="card__left">
              <p>Benefits</p>
              <h2>Get Student ID card</h2>
              <ul>
                <li>
                  <img src="" alt="" />
                  <p>Teachers don't get lost in the grid view and have a<br />
                  dedicated Podium space. </p>
                </li>
                <li>
                  <img src="" alt="" />
                  <p>TA’s and presenters can be moved to the front of<br />
                  the class.</p>
                </li>
                <li>
                  <img src="" alt="" />
                  <p>Teachers can easily see all students and class data<br />
                  at one time.</p>
                </li>
              </ul>
            </div>
            <div className="card__right">
              <ul>
                <li>
                  <img src="" alt="" />
                  <h4>Mark J. William</h4>
                  <p>ID Number : 0121 2376 1 291</p>
                  <p>williams_s@company.com</p>
                  <p>+01 8921 9012 8888</p>
                </li>
                <li>
                  <img src="" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing<br />
                  elit, sed diam nonummy nibh euismod tincidunt ut<br />
                  laoreet dolore </p>
                  <p>card holder signature</p>
                  <img src="" alt="" />
                  <p></p>
                  <img src="" alt="" />
                  <img src="" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="training">
        <div className="container">
          <div className="training__inner">
            <div className="training__left">
              <img src="" alt="" />
            </div>
            <div className="training__right">
              <p>Training</p>
              <h2>Staff training</h2>
              <ul>
                <li>
                  <img src="" alt="" />
                  <p>Teachers don't get lost in the grid view and have a<br />
                  dedicated Podium space. </p>
                </li>
                <li>
                  <img src="" alt="" />
                  <p>TA’s and presenters can be moved to the front of<br />
                  the class.</p>
                </li>
                <li>
                  <img src="" alt="" />
                  <p>Teachers can easily see all students and class data<br />
                  at one time.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="gift-cards">
        <div className="container">
          <div className="gift-cards__inner">
            <div className="gift-cards__left">
              <h2>Why You should buy<br />
              gift cards?</h2>
              <ul>
                <li>Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
                <li>Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
                <li>Teachers don’t get lost in the grid view and have a dedicated Podium space.</li>
              </ul>
              <a href="">BUY NOW</a>
            </div>
            <div className="gift-cards__right">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bundles">
        <div className="container">
          <div className="bundles__inner">
            <h2>Exclusive Bundles</h2>
            <p>Onlearing  is one powerful online software suite that combines all the tools<br />
            needed to run a successful school or office.</p>
            <ul className="bundles__menu">
              <li>
                <div className="bundles__item-img">
                  <img src="" alt="" />
                  <p></p>
                </div>
                <div className="bundles__item-description">
                  <p>1 -28 July 2022</p>
                  <h4>Product Management Basic -<br />
                  Course</h4>
                  <p>Product Management Masterclass, you will learn with<br />
                  Sarah Johnson - Head of Product Customer Platform<br />
                  Gojek Indonesia.</p>
                  <img src="" alt="" />
                </div>
              </li>
              <li>
                <div className="bundles__item-img">
                  <img src="" alt="" />
                  <p></p>
                </div>
                <div className="bundles__item-description">
                  <p>1 -28 July 2022</p>
                  <h4>Product Management Basic -<br />
                  Course</h4>
                  <p>Product Management Masterclass, you will learn with<br />
                  Sarah Johnson - Head of Product Customer Platform<br />
                  Gojek Indonesia.</p>
                  <img src="" alt="" />
                </div>
              </li>
              <li>
                <div className="bundles__item-img">
                  <img src="" alt="" />
                  <p></p>
                </div>
                <div className="bundles__item-description">
                  <p>1 -28 July 2022</p>
                  <h4>Product Management Basic -<br />
                  Course</h4>
                  <p>Product Management Masterclass, you will learn with<br />
                  Sarah Johnson - Head of Product Customer Platform<br />
                  Gojek Indonesia.</p>
                  <img src="" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home