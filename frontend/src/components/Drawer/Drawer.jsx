import React from 'react'
import './Drawer.scss';
import CardItem from '../CartItem/CartItem';
import EmptyCart from '../EmptyCart/EmptyCart';

function Drawer({ isOpen, onCartClose, items, onCardDelete }) {

    return (
        <div className={isOpen ? `drawer-overlay drawer-overlay_visible` : `drawer-overlay`}>
            <div className="drawer">
                <button onClick={onCartClose} className="drawer__close-btn" aria-label="close cart" type="button"/>
                    { items.length > 0 ? (
                        <>
                            <div className="drawer__top-content-wrapper">
                                <h2 className="drawer__title">
                                    Корзина
                                </h2>
                                <ul className="drawer__list">
                                    {
                                        items.map((card, index) => 
                                            <CardItem
                                                {...card}
                                                // itemTitle={card.cardName}
                                                // itemPrice={card.cardPrice}
                                                // itemImage={card.imgPath}
                                                key={index}
                                                onDelete={() => onCardDelete(card.id)}
                                            />
                                        )
                                    }        
                                </ul>
                            </div>
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
                        </>
                        ) : (
                        <>
                            <div className="drawer__top-content-wrapper">
                                <h2 className="drawer__title">
                                    Корзина
                                </h2>
                                <EmptyCart 
                                    onCartClose={onCartClose}
                                />
                            </div>
                        </>
                        )
                    }
                </div>
            </div>
    )
}

export default Drawer
