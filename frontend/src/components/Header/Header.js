import React from "react";
import './Header.scss';
import logoPath from '../../images/nike-logo.png';

function Header () {
    return (
        <header className="header">
          <div className="header__logo-wrapper">
            <img className="transparent-link" src={logoPath} alt="logo"/>
            <div className="header__text-wrapper">
              <h3>
                Nike React
              </h3>
              <p>
                Магазин лучших кроссовок
              </p>
            </div>
          </div>
          <ul className="header__btn-list">
                <li>
                    <button className="header__cart-btn transparent-link" type="button">1205&nbsp;руб.</button>
                </li>
                <li>
                    <button className="header__favourite-btn" type="button"></button>
                </li>
                <li>
                    <button className="header__acc-btn" type="button"></button>
                </li>
            </ul>
        </header>
    )
};

export default Header;