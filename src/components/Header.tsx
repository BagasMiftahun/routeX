// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      {/* Offcanvas area start */}
      <div className="fix">
        <div className="offcanvas__area">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="index.html">
                    <img
                      src="assets/imgs/logo/offcanvas-logo.png"
                      alt="logo not found"
                    />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button className="offcanvas-close-icon animation--flip">
                    <span className="offcanvas-m-lines">
                      <span className="offcanvas-m-line line--1" />
                      <span className="offcanvas-m-line line--2" />
                      <span className="offcanvas-m-line line--3" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix" />
              <div className="offcanvas__social">
                <h3 className="offcanvas__title mb-20">
                  Subscribe &amp; Follow
                </h3>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://pinterest.com/">
                      <i className="fa-brands fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="offcanvas__btn d-sm-none">
                <div className="header__btn-wrap">
                  <a className="rr-btn btn-hover-white" href="contact.html">
                    Purchase Now
                    <span>
                      <i className="fa-regular fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas__overlay" />
      <div className="offcanvas__overlay-white" />
      {/* Offcanvas area start */}
      {/* Header area start */}
      <header>
        <div id="header-sticky" className="header__area header-1 gray-bg">
          <div className="header-container">
            <div className="mega__menu-wrapper p-relative">
              <div className="header__main">
                <div className="header__left">
                  <div className="header__logo">
                    <a href="index.html">
                      <div className="logo">
                        <img
                          src="assets/imgs/logo/logo.svg"
                          alt="logo not found"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="header__middle">
                  <div className="mean__menu-wrapper d-none d-xl-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="active">
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about-us">About Us</Link>
                          </li>
                          <li>
                            <Link to="/story">Story</Link>
                          </li>
                          <li>
                            <Link to="/visa">Visa</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li className="has-dropdown">
                            <Link to="#">Page</Link>
                            <ul className="submenu">
                              <li>
                                <Link to="/visa-offers">Visa Offers</Link>
                              </li>
                              <li>
                                <Link to="/gallery">Gallery</Link>
                              </li>
                              <li>
                                <Link to="/pricing">Pricing</Link>
                              </li>
                              <li>
                                <Link to="/coaching">Coaching</Link>
                              </li>
                              <li>
                                <Link to="/countries">Countries</Link>
                              </li>
                              <li>
                                <Link to="/team">Team</Link>
                              </li>
                              <li>
                                <Link to="/faq">FAQ</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="header__right">
                  <div className="header__action d-flex align-items-center">
                    <div className="header__btn-wrap d-none d-sm-inline-flex">
                      <a href="contact.html" className="rr-btn">
                        Get An Appointment{" "}
                        <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                    <div className="header__hamburger ml-20 d-xl-none">
                      <div className="sidebar__toggle">
                        <button className="bar-icon">
                          <span />
                          <span />
                          <span />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="popup-search-box">
        <div className="box-inner-wrap d-flex align-items-center">
          <form id="form" action="#" method="get" role="search">
            <input
              id="popup-search"
              type="text"
              name="s"
              placeholder="Type keywords here..."
            />
          </form>
          <div className="search-close">
            <i className="fa-sharp fa-regular fa-xmark" />
          </div>
        </div>
      </div>
      {/* Header area end */}
    </>
  );
};

export default Header;
