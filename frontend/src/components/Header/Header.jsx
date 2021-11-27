import React from "react";
import {Link} from 'react-router-dom';
import './Header.scss';
import logoPath from '../../images/nike-logo.png';

function Header ({onCartOpen}) {
    return (
        <header className="header">
          <Link to="/">
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
          </Link>
          <ul className="header__btn-list">
                <li>
                    <button onClick={onCartOpen} className="header__cart-btn transparent-link" type="button">1205&nbsp;руб.</button>
                </li>
                <Link to="/favourites">
                  <li>
                      <button className="header__favourite-btn" type="button"></button>
                  </li>
                </Link>
                <Link to="/orders">
                  <li>
                      <button className="header__acc-btn" type="button"></button>
                  </li>
                </Link>
                
            </ul>
        </header>
    )
};

export default Header;