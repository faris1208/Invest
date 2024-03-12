import React from 'react';
import './App.css';
import { RxHamburgerMenu } from "react-icons/rx";
import flutterwave from "../src/assets/Img/logo.087b71d5bfd9b09ef2850638f9adb990.svg";
import google from "../src/assets/Img/App-Store.png";
import Phone1 from "../src/assets/Img/phone.2d620add4b30b1cb5a62.png";
import Brand from "../src/assets/Img/brands.7400ee96046bd5339e872a8244a8b423.svg";
import { GoArrowRight } from "react-icons/go";
import girl from "../src/assets/Img/image1.c93ca6cef1020fa9c99f.png";
import gals from "../src/assets/Img/image2.6dfd73946f7e615f4749.png";
import boy from "../src/assets/Img/image3.86ec9a1febd819e8c213.png";
import boys from "../src/assets/Img/image4.0d1d6cbd5ed06a436f51.png";
import stock from "../src/assets/Img/stock.png";
import estate from "../src/assets/Img/Estate.png";
import income from "../src/assets/Img/income.png";
import Future from "../src/assets/Img/build-weight.cd50dbb7f7d37a0d4e088e64d6666a12.svg";
import Lade from "../src/assets/Img/Lade.png";
import Jesse from "../src/assets/Img/Jesse.png";
import Raye from "../src/assets/Img/Raye.png";
import Community from "../src/assets/Img/join-community.d2678f5b3006ac00dc42.png";
import { useState } from "react";


  const App = () => {

    // const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
      setActive((open) => !open)
  }

  return (
    <div className="App">
        <div className='Investment-container'>
          <div className='Navbar-container'>
            <div className="Navbar">
                      <div className="Flutterwave">
                          <img src={flutterwave} alt="" className="flutterwave-image" width="100%" />
                      </div>
                      <div className="Hamburger">
                          <RxHamburgerMenu className="Menu" onClick={toggleMenu} />
                          {/* <IoMenu className="menu-icon" onClick={toggleMenu} /> */}
                      
                          <div className={`login ${active ? "is-open" : ""}`}>
                              <ul>
                                  <li className="blogs">Home</li>
                                  <li className="blogs">Products</li>
                                  <li className="log" >Investment Club</li>
                                  <li className="make">Blog</li>
                                  <li className="make">About Us</li>
                                  <li className="make">FAQs</li>
                              </ul>
                          </div>
                        </div>
                      <div className="login-two">
                          <ul>
                              <li>Home</li>
                              <li>Products</li>
                              <li>Investment Club</li>
                              <li>Blog</li>
                              <li>About Us</li>
                              <li>FAQs</li>
                          </ul>
                      </div>
                  </div>
            </div>

            <div className='Dollar'>
              <div className='Dollar-head'>
                <h1>Dollar Investments That Help You Grow</h1>
                <p>We put your money in high quality assets that help you build wealth and achieve your financial goals.</p>
                <div className='Dollar-img'>
                  <img src={google} alt="" className="google-image" width="100%" />
                </div>
              </div>
              <div className='Phone'>
                <img src={Phone1} alt="" className="Phone1-image" width="100%" />
              </div>
            </div>
            <div className='Brand'>
              <img src={Brand} alt="" className="Brand-image" width="100%" />
            </div>

            <div className='Number-contents'>
              <div className='Number-head'>
                <img src={girl} alt="" className="Number-image" width="100%" />
              </div>
              <div className='Number-Text'>
                <h2>Invest your money in dollars</h2>
                <p>By holding your investments in a stable currency, your money grows more over time and retains its value better.</p>
                <div className='Start'>
                  <a href="/">Start Investing Now </a>
                  <GoArrowRight className='right' />
                </div>
              </div>
            </div>

            <div className='Choose-contents'>
              <div className='Number-head'>
                <img src={gals} alt="" className="Number-image" width="100%" />
              </div>
              <div className='Number-Text'>
                <h2>Choose what's best for you</h2>
                <p>Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place.</p>
                <div className='Start'>
                  <a href="/">Start Investing Now </a>
                  <GoArrowRight className='right' />
                </div>
              </div>
            </div>

            <div className='Number-contents'>
              <div className='Number-head'>
                <img src={boy} alt="" className="Number-image" width="100%" />
              </div>
              <div className='Number-Text'>
                <h2>Set goals and reach them</h2>
                <p>You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them.</p>
                <div className='Start'>
                  <a href="/">Start Investing Now </a>
                  <GoArrowRight className='right' />
                </div>
              </div>
            </div>

            <div className='Choose-contents'>
              <div className='Number-head'>
                <img src={boys} alt="" className="Number-image" width="100%" />
              </div>
              <div className='Number-Text'>
                <h2>We remember so you dont have to</h2>
                <p>Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule.</p>
                <div className='Start'>
                  <a href="/">Start Investing Now </a>
                  <GoArrowRight className='right' />
                </div>
              </div>
            </div>

            <div className='Assets'>
              <div className='Assets-head'>
                <h1>Asset Classes</h1>
                <p>It’s your money, choose where you invest it</p>
              </div>
              <div className='Assets-Power'>
                <div className='Assets-two'>
                  <div className='moves'>
                    <div className='pink'></div>
                    <div className='stock'>
                      <img src={stock} alt="" className="stock-image" width="100%" />
                    </div>
                  </div>
                  <div className='Power'>
                    <div className='Power-text'>
                      <h1>Stocks</h1>
                      <p>We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.</p>
                    </div>
                    <div className='Historical'>
                      <p>Historical returns: <span> 14% per annum</span> </p>
                      <p>Risk Level: <span> Medium</span></p>
                      <div className='Historical-text'>
                        <a href="/">Learn how Stocks work </a>
                        <GoArrowRight className='right' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='Assets-two'>
                  <div className='moves'>
                    <div className='blue'></div>
                    <div className='stock'>
                      <img src={estate} alt="" className="stock-image" width="100%" />
                    </div>
                  </div>
                  <div className='Power'>
                    <div className='Power-text'>
                      <h1>Real Estate</h1>
                      <p>Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.</p>
                    </div>
                    <div className='Historical'>
                      <p>Historical returns: <span> 14% per annum</span> </p>
                      <p>Risk Level: <span> Medium</span></p>
                      <div className='Historical-text'>
                        <a href="/">Learn how Stocks work </a>
                        <GoArrowRight className='right' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='Assets-two'>
                  <div className='moves'>
                    <div className='green'></div>
                    <div className='stock'>
                      <img src={income} alt="" className="stock-image" width="100%" />
                    </div>
                  </div>
                  <div className='Power'>
                    <div className='Power-text'>
                      <h1>Fixed Income</h1>
                      <p>A low-risk asset perfect for anyone who wants to protect their money in a secure, For people who want money from inflation while earning steady returns.</p>
                    </div>
                    <div className='Historical'>
                      <p>Historical returns: <span> 14% per annum</span> </p>
                      <p>Risk Level: <span> Medium</span></p>
                      <div className='Historical-text'>
                        <a href="/">Learn how Stocks work </a>
                        <GoArrowRight className='right' />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className='Future'>
              <div className='Future-img'>
                <img src={Future} alt="" className="Future-image" width="100%" />
              </div>
              <div className='Future-Text'>
                <h3>The Rise App</h3>
                <h1>Save for your <span className='future-stan'>future</span></h1>
                <p>With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children’s future and more.</p>
                <button className='Start-btn'>Start Saving</button>
              </div>
            </div>

            <div className='Regulated'>
              <div className='Regulated-text'>
                <h2>How we are Regulated</h2>
                <p>Rise is registered and regulated both in the US and in Nigeria. Our team is made up of US registered investment advisers, our Nigerian users are covered by our SEC licensed trustees, ARM Trustees and all our assets are held with regulated third parties, in all relevant jurisdictions</p>
              </div>
            </div>

            <div className='Nigeria'>
              <div className='People'>
                <h1>From The People Who Use Rise</h1>
                <p>Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.</p>
              </div>
              <div className='Nigeria-text'>
                <div className='Lade'>
                  <p>I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.</p>
                  <div className='Lade-img'>
                    <img src={Lade} alt="" className="Lade-image" width="100%" />
                    <p>Lade</p>
                  </div>
                </div>
                <div className='Lade'>
                  <p>I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.</p>
                  <div className='Lade-img'>
                    <img src={Jesse} alt="" className="Lade-image" width="100%" />
                    <p>Jesse</p>
                  </div>
                </div>
                <div className='Lade'>
                  <p>I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.</p>
                  <div className='Lade-img'>
                    <img src={Raye} alt="" className="Lade-image" width="100%" />
                    <p>Raye</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='Community'>
              <div className='Community-img'>
                <img src={Community} alt="" className="Community-image" width="100%" />
              </div>
              <div className='Community-text'>
                <h1>Join The Rise Community</h1>
                <p>If you want to go far, go together. Our Telegram community surrounds you with others who can help you along your financial journey with tips, support, advice and learning. It's completely free and open to new and seasoned investors.</p>
                <button className='Community-btn'>Join our Community</button>
              </div>
            </div>

            <div className='Investing'>
              <div className='Investing-text'>
                <h3>Download The Rise App</h3>
                <h2>Join our 100,000 users investing and setting long term goals!</h2>
                <p>Dollar investments that help you grow.</p>
                <div className='apple-img'>
                  <img src={google} alt="" className="apple-image" width="100%" />
                </div>
              </div>
              <div className='Phone2'>
                <img src={Phone1} alt="" className="Phone2-image" width="100%" />
              </div>
            </div>

            <footer>
              <div className='footer-div'>
                <div className='rise'>
                  <div className="Flutterwave">
                    <img src={flutterwave} alt="" className="rise-image" width="100%" />
                  </div>
                  <p>About Us</p>
                  <p>Creers</p>
                  <p>FAQs</p>
                  <p>Contact info</p>
                  <p>Press</p>
                  <p>Rise Impact</p>
                </div>
                <div className='Explore'>
                  <h1>Explore</h1>
                  <p>Investment Club</p>
                  <p>Blog</p>
                </div>
                <div className='Products'>
                  <h1>Products</h1>
                  <p>Rise App</p>
                  <p>Wallets</p>
                  <p>Asset Classes</p>
                </div>
                <div className='Contact-Us'>
                  <h1>Contact Us</h1>
                  <p>0818 714 7405 </p>
                  <p>hello@rise.capital</p>
                  <p>Newsletter</p>
                  <p>Instagram </p>
                  <p>Twitter</p>
                </div>
              </div>
            </footer>

        </div>
    </div>
  );
}

export default App;
