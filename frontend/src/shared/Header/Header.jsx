import React from "react";

import AppContext from "../../utils/context";
import {Link} from 'react-router-dom';
import './Header.scss';
import logoPath from '../../images/nike-logo.png';

function Header ({onCartOpen}) {
    const {totalCount} = React.useContext(AppContext);
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
                    <button onClick={onCartOpen} className="header__cart-btn transparent-link" type="button">{!totalCount ? 0 : totalCount}&nbsp;руб.</button>
                </li>
                <li>
                  <Link to="/favourites">
                        <button className="header__favourite-btn" type="button"></button>
                  </Link>
                </li>
                <li>
                  <Link to="/orders">
                        <button className="header__acc-btn" type="button"></button>
                  </Link>
                </li>
            </ul>
        </header>
    )
};

export default Header;