import React, { useState } from "react";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //   const closeMenu = () => {
  //     setIsMenuOpen(false);
  //   };

  return (
    <div className="container">
      <header className="header__container">
        <div className="header__top">
          <div className="header__wrapper">
            <div className="header__layout">
              <div className="header__column header__column--left header__site-menu-wrapper">
                <div className="header__section">
                  <nav class="site-menu j-site-menu">
                    <span class="site-menu__item">
                      <a class="site-menu__link" href="/catalog/">
                        Каталог
                      </a>
                    </span>

                    <span class="site-menu__item">
                      <a class="site-menu__link" href="/o-nas/">
                        Про компанію
                      </a>
                    </span>
                    <span class="site-menu__item">
                      <a
                        class="site-menu__link"
                        href="/kontaktnaja-informacija/"
                      >
                        Контакти
                      </a>
                    </span>

                    <span class="site-menu__item">
                      <a class="site-menu__link" href="/oplata-i-dostavka/">
                        Оплата і доставка
                      </a>
                    </span>
                  </nav>
                </div>
                <div class="header__section">
                  <div class="social-icons">
                    <a
                      class="social-icons__item"
                      rel="nofollow"
                      target="_blank"
                      title="Ми у Facebook"
                      href="*"
                    >
                      <svg class="social-icons__img icon-fb"></svg>
                    </a>
                    <a
                      class="social-icons__item"
                      rel="nofollow"
                      target="_blank"
                      title="Мы в Youtube!"
                      href="*"
                    >
                      <svg class="social-icons__img icon-yt"></svg>
                    </a>
                    <a
                      class="social-icons__item"
                      rel="nofollow"
                      target="_blank"
                      title="Ми в інстаграми"
                      href="*"
                    >
                      <svg class="social-icons__img icon-ig"></svg>
                    </a>
                  </div>
                </div>
                <div class="header__section">
                  <div data-widget="userbar" data-skin="header_top">
                    <div class="userbar j-user-tabs">
                      <a
                        class="userbar__button __active"
                        data-modal="#sign-in"
                        href="#j-popup-tab-auth"
                      >
                        <svg class="icon icon--user"></svg>
                        <span class="userbar__button-text">Вхід</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
            id="hamburger"
            onClick={toggleMenu}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          {/* {isMenuOpen && <MobMenu onClose={closeMenu} />} */}
        </div>
      </header>
    </div>
  );
}

export default Header;
