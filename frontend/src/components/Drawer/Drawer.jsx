import React from 'react'
import './Drawer.scss';
import CardItem from '../CartItem/CartItem';
import itemImg1 from '../../images/sneakers/1.jpg';

function Drawer({isOpen, onCartClose}) {
    return (
        <div className={isOpen ? `drawer-overlay drawer-overlay_visible` : `drawer-overlay`}>
            <div className="drawer">
                <button onClick={onCartClose} className="drawer__close-btn" aria-label="close cart" type="button"/>
                <h2 className="drawer__title">
                    Корзина
                </h2>
                <ul className="drawer__list">
                    <CardItem
                        itemImage={itemImg1}
                        itemTitle='Мужские Кроссовки Nike Blazer Mid Suede'
                        itemPrice='12 999'
                    />
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
                        className="drawer__pay-btn"
                    >
                        Оформить заказ    
                    </button>    
                </div>
            </div>
        </div>
    )
}

export default Drawer
