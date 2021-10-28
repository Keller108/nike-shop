import React from 'react'
import './Drawer.scss';

function Drawer() {
    return (
        <div className="drawer-overlay">
            <div className="drawer">
                <h2 className="drawer__title">
                    Корзина
                </h2>
                <ul className="drawer__list">
                    <li className="drawer__item">

                    </li>
                </ul>
                <div className="drawer__amount-wrapper">
                    <div className="drawer__amount-content">
                        <p className="drawer__amount-title">
                            Итого
                        </p>
                        <div className="drawer__dots"></div>
                        <p className="drawer__amout-price">
                            21 432 руб.
                        </p>
                    </div>
                    <div className="drawer__amount-content">
                        <p className="drawer__amount-title">
                            Налог 5%
                        </p>
                        <div className="drawer__dots"></div>
                        <p className="drawer__amout-price">
                            1074 руб.
                        </p>
                    </div>
                    <button 
                        type="button"
                        className="drawer__go-pay"
                    >
                        Оформить заказ    
                    </button>    
                </div>
            </div>
        </div>
    )
}

export default Drawer
